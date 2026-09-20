"use client";

import { AdminTable, Column } from "@/components/admin/AdminTable";
import AdminModal from "@/components/admin/AdminModal";
import { Button } from "@/components/ui/button";
import { useVolunteers } from "@/hooks/useVolunteers";
import { VolunteerFormValues } from "@/schemas/volunteer-schema";
import { useState } from "react";
import { LuEye } from "react-icons/lu";


export default function VolunteersAdminPage() {

    // ##### States #####
    const [isShowModalOpen, setIsShowModalOpen] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] =
        useState<VolunteerFormValues | null>(null);

    // ###### Handlers #####
    const handleShow = (item: VolunteerFormValues) => {
        setSelectedVolunteer(item);
        setIsShowModalOpen(true);
        console.log(item);
    }

    // ###### Query Hooks ######
    const { data: volunteers } = useVolunteers();



    const columns: Column<VolunteerFormValues>[] = [
        { header: "الاسم", accessorKey: "name", className: "font-bold text-primary" },
        { header: "رقم التليفون", accessorKey: "phone_number", className: "font-bold text-primary" },
        { header: "السن", accessorKey: "age", className: "font-bold text-primary" },
        // { header: "العنوان", accessorKey: "address", className: "font-bold text-primary" },
        // { header: "الرقم القومي", accessorKey: "national_id", className: "font-bold text-primary" },
        // { header: "البريد الإلكتروني", accessorKey: "gmail", className: "font-bold text-primary" },
        // { header: "فيسبوك", accessorKey: "facebook_url", className: "font-bold text-primary" },
        // { header: "لينكدإن", accessorKey: "linkedin_url", className: "font-bold text-primary" },
        // { header: "الجامعة", accessorKey: "university", className: "font-bold text-primary" },
        { header: "الكلية", accessorKey: "faculty", className: "font-bold text-primary" },
        // { header: "السنة الدراسية", accessorKey: "year_of_study", className: "font-bold text-primary" },
        { header: "المهنة", accessorKey: "job", className: "font-bold text-primary" },
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
                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">إدارة المتقدمين للتطوع</h1>
                    {/* <p className="text-slate-500">أضف، عدل، أو احذف الإنجازات التي تظهر في الموقع.</p> */}
                </div>
            </div>

            {/* ###### Achievements Table ###### */}
            <AdminTable
                data={volunteers || []}
                columns={columns}
                keyExtractor={(item) => item.id}
            />

            {/* ###### Show Modal ###### */}
            <AdminModal
                isOpen={isShowModalOpen}
                onClose={() => setIsShowModalOpen(false)}
                title="تفاصيل المتطوع"
            >
                <div className="space-y-8 pb-2">

                    {/* Section: Personal Info */}
                    <div>
                        <h4 className="text-lg font-bold text-[#11395f] mb-4 border-b border-slate-100 pb-2">البيانات الشخصية</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">الاسم</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.name}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">السن</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.age} سنة</p>
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <span className="text-sm text-slate-500 font-medium">الرقم القومي</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.national_id}</p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-[#11395f] mb-4 border-b border-slate-100 pb-2">بيانات التواصل</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">رقم التليفون</span>
                                <p className="font-semibold text-slate-800" dir="ltr" style={{ textAlign: 'right' }}>{selectedVolunteer?.phone_number}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">البريد الإلكتروني</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.gmail}</p>
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <span className="text-sm text-slate-500 font-medium">العنوان</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Academic/Professional */}
                    <div>
                        <h4 className="text-lg font-bold text-[#11395f] mb-4 border-b border-slate-100 pb-2">البيانات الأكاديمية والمهنية</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">الجامعة</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.university}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">الكلية</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.faculty}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">السنة الدراسية</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.year_of_study}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm text-slate-500 font-medium">المهنة</span>
                                <p className="font-semibold text-slate-800">{selectedVolunteer?.job}</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    {(selectedVolunteer?.facebook_url || selectedVolunteer?.linkedin_url) && (
                        <div>
                            <h4 className="text-lg font-bold text-[#11395f] mb-4 border-b border-slate-100 pb-2">حسابات التواصل الاجتماعي</h4>
                            <div className="flex gap-4">
                                {selectedVolunteer?.facebook_url && (
                                    <a href={selectedVolunteer.facebook_url} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-secondary/10 text-[#11395f] hover:bg-secondary/20 rounded-xl font-bold text-center transition-colors">
                                        حساب فيسبوك
                                    </a>
                                )}
                                {selectedVolunteer?.linkedin_url && (
                                    <a href={selectedVolunteer.linkedin_url} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-secondary/10 text-[#11395f] hover:bg-secondary/20 rounded-xl font-bold text-center transition-colors">
                                        حساب لينكدإن
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </AdminModal>


        </div>
    );
}
