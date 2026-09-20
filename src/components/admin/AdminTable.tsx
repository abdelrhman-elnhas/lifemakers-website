"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface Column<T> {
    header: string;
    accessorKey?: keyof T;
    cell?: (item: T) => React.ReactNode;
    className?: string;
}

interface AdminTableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyExtractor: (item: T) => string | number | undefined;
    emptyMessage?: string;
}

export function AdminTable<T>({
    data,
    columns,
    keyExtractor,
    emptyMessage = "لا توجد بيانات لعرضها"
}: AdminTableProps<T>) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden w-full" dir="rtl">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-right">
                    <thead className="bg-slate-50/80 text-slate-500 font-bold border-b border-slate-100">
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} className={cn("px-6 py-4 whitespace-nowrap", col.className)}>
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-500">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <span className="text-4xl">📑</span>
                                        <p>{emptyMessage}</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr
                                    key={keyExtractor(item)}
                                    className="hover:bg-slate-50/50 transition-colors group"
                                >
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex} className={cn("px-6 py-4 text-slate-700 whitespace-nowrap ", col.className)}>
                                            {col.cell
                                                ? col.cell(item)
                                                : col.accessorKey
                                                    ? (item[col.accessorKey] as React.ReactNode)
                                                    : null}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
