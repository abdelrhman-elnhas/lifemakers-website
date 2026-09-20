"use client";

import { AdminTable, Column } from "@/components/admin/AdminTable";
import AdminModal from "@/components/admin/AdminModal";
import { Button } from "@/components/ui/button";
import { useVolunteers } from "@/hooks/useVolunteers";
import { VolunteerFormValues } from "@/schemas/volunteer-schema";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IContactForm } from "@/types/contact";
import { useMessages } from "@/hooks/useContact";
import { select } from "framer-motion/client";


export default function ContactAdminPage() {

    // ##### States #####
    const [isShowModalOpen, setIsShowModalOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] =
        useState<IContactForm | null>(null);

    // ###### Handlers #####
    const handleShow = (item: IContactForm) => {
        setSelectedMessage(item);
        setIsShowModalOpen(true);
        console.log(item);
    }

    // ###### Query Hooks ######
    const { data: messages } = useMessages();
    console.log(messages);



    const columns: Column<IContactForm>[] = [
        { header: "الاسم", accessorKey: "name", className: "font-bold text-primary" },
        { header: "رقم التليفون", accessorKey: "phone_number", className: "font-bold text-primary" },
        { header: "البريد الالكتروني", accessorKey: "email", className: "font-bold text-primary" },
        { header: "الموضوع", accessorKey: "subject", className: "font-bold text-primary" },
        { header: "الرسالة", accessorKey: "message", className: "font-bold text-primary" },
        {
            header: "إجراءات", cell: (item) => (
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleShow(item)}>
                        <LuEye className="w-4 h-4" />
                    </Button>
                </div>
            ), className: "font-bold text-primary"
        },
    ];

    return (
        <div className="p-4 md:p-6 max-w-7xl mx-auto w-full" dir="rtl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">إدارة الرسائل</h1>
                    {/* <p className="text-slate-500">أضف، عدل، أو احذف الإنجازات التي تظهر في الموقع.</p> */}
                </div>
            </div>

            {/* ###### Messages Table ###### */}
            <AdminTable
                data={messages || []}
                columns={columns}
                keyExtractor={(item) => item.id}
            />

            {/* ###### Show Modal ###### */}
            <AdminModal
                isOpen={isShowModalOpen}
                onClose={() => setIsShowModalOpen(false)}
                title="تفاصيل الرسالة"
            >
                <div className="space-y-6 pb-2 text-slate-700">
                    {selectedMessage && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 mb-1">الاسم</h4>
                                    <p className="font-semibold text-primary">{selectedMessage.name}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 mb-1">رقم الهاتف</h4>
                                    <p className="font-semibold text-primary block" dir="ltr" style={{ textAlign: 'right' }}>{selectedMessage.phone_number}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 mb-1">البريد الإلكتروني</h4>
                                    <p className="font-semibold text-primary">{selectedMessage.email || "—"}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 mb-1">عنوان الاستفسار</h4>
                                    <p className="font-semibold text-primary">{selectedMessage.subject}</p>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 mb-2">نص الرسالة</h4>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                                    {selectedMessage.message}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </AdminModal>


        </div>
    );
}
