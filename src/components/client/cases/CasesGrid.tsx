"use client";

import { useCases } from '@/hooks/useCases';
import { CasesFormValues } from '@/schemas/cases.schema';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface CasesGridProps {
    limit?: number;
}

const CaseCard = ({ item }: { item: CasesFormValues }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group h-full cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="relative h-56 w-full shrink-0 overflow-hidden">
                    <Image
                        src={item.images?.[0] || "/logo.png"}
                        alt={item.title || "حالة إنسانية"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-4 py-1.5 rounded-full text-xs font-bold shadow-sm bg-secondary text-primary">
                            {item.type}
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-[clamp(1.125rem,4vw,1.25rem)] font-bold text-slate-900 mb-3 line-clamp-1" title={item.title}>
                        {item.title}
                    </h3>

                    {/* Description wrapper */}
                    <div className="flex-1 flex flex-col mb-4">
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                            {item.description}
                        </p>
                    </div>

                    {item.remaining && item.min_amount && (
                        <div className="flex flex-col min-[320px]:flex-row justify-between items-center mb-6 bg-slate-50 p-3 min-[320px]:p-4 rounded-xl border border-slate-100 shrink-0 gap-3 min-[320px]:gap-0 w-full">
                            <div className="flex flex-col justify-center items-center w-full min-[320px]:w-auto">
                                <span className="text-slate-500 text-xs min-[320px]:text-sm font-medium">المبلغ المتبقي</span>
                                <span className="font-bold text-primary text-base min-[320px]:text-lg">{item.remaining} <span className="text-xs min-[320px]:text-sm font-normal text-slate-500">ج.م</span></span>
                            </div>
                            <div className="w-full h-px min-[320px]:w-px min-[320px]:h-auto bg-slate-200 min-[320px]:self-stretch my-1"></div>
                            <div className="flex flex-col justify-center items-center w-full min-[320px]:w-auto">
                                <span className="text-slate-500 text-xs min-[320px]:text-sm font-medium">سعر السهم</span>
                                <span className="font-semibold text-slate-700 text-sm min-[320px]:text-base">{item.min_amount} <span className="text-[10px] min-[320px]:text-xs font-normal text-slate-500">ج.م</span></span>
                            </div>
                        </div>
                    )}

                    <Link
                        href={`https://wa.me/+201550550961?text=${encodeURIComponent(`أريد التبرع لحالة: ${item.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3.5 px-4 rounded-xl font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg shadow-primary/30 shrink-0"
                    >
                        <span>تبرع الان</span>
                    </Link>
                </div>
            </div>

            {/* Modal for full details */}
            {isModalOpen && typeof document !== 'undefined' && createPortal(
                <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-200">
                        {/* Modal Header with Image */}
                        <div className="relative h-64 sm:h-72 w-full shrink-0">
                            <Image
                                src={item.images?.[0] || "/logo.png"}
                                alt={item.title || "حالة إنسانية"}
                                fill
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 right-6 left-6 flex justify-between items-end">
                                <h2 className="text-[clamp(1.5rem,5vw,1.875rem)] font-extrabold text-white">{item.title}</h2>
                                <span className="px-4 py-1.5 rounded-full text-sm font-bold shadow-sm bg-secondary text-primary shrink-0">
                                    {item.type}
                                </span>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 min-w-11 min-h-11 flex items-center justify-center backdrop-blur-md transition-colors focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 flex flex-col gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">تفاصيل الحالة</h4>
                                <p className="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">
                                    {item.description}
                                </p>
                            </div>

                            {item.remaining && item.min_amount && (
                                <div className="flex flex-col min-[320px]:flex-row justify-between items-center bg-slate-50 p-4 min-[320px]:p-5 rounded-2xl border border-slate-100 shrink-0 gap-4 min-[320px]:gap-0 w-full">
                                    <div className="flex flex-col justify-center items-center w-full min-[320px]:w-auto">
                                        <span className="text-slate-500 text-xs min-[320px]:text-sm font-medium mb-1">المبلغ المتبقي</span>
                                        <span className="font-bold text-primary text-lg min-[320px]:text-xl sm:text-2xl">{item.remaining} <span className="text-xs min-[320px]:text-sm font-normal text-slate-500">ج.م</span></span>
                                    </div>
                                    <div className="w-full h-px min-[320px]:w-px min-[320px]:h-auto bg-slate-200 min-[320px]:self-stretch my-1"></div>
                                    <div className="flex flex-col justify-center items-center w-full min-[320px]:w-auto">
                                        <span className="text-slate-500 text-xs min-[320px]:text-sm font-medium mb-1">سعر السهم</span>
                                        <span className="font-semibold text-slate-700 text-base min-[320px]:text-lg sm:text-xl">{item.min_amount} <span className="text-xs min-[320px]:text-sm font-normal text-slate-500">ج.م</span></span>
                                    </div>
                                </div>
                            )}

                            <Link
                                href={`https://wa.me/+201550550961?text=${encodeURIComponent(`أريد التبرع لحالة: ${item.title}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/30 shrink-0"
                            >
                                <span>تبرع الآن لهذه الحالة</span>
                            </Link>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

const CasesGrid = ({ limit }: CasesGridProps = {}) => {
    const { data: cases } = useCases();
    const displayedCases = limit ? cases?.slice(0, limit) : cases;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {displayedCases?.map((item) => (
                <CaseCard key={item.id} item={item} />
            ))}
        </div>
    );
}

export default CasesGrid;