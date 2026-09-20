"use client";

import { useState } from "react";
import { AdminTable, Column } from "@/components/admin/AdminTable";
import AdminModal from "@/components/admin/AdminModal";
import { Button } from "@/components/ui/button";
import { LuPlus, LuPencil, LuTrash2 } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { CasesFormValues } from "@/schemas/cases.schema";
import { useCases, useDeleteCases, useSubmitCases, useUpdateCases } from "@/hooks/useCases";


export default function CasesAdminPage() {

    type CaseFormData = CasesFormValues & { imageFiles?: FileList };

    // ###### States ######
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedCase, setSelectedCase] =
        useState<CasesFormValues | null>(null);

    const [existingImages, setExistingImages] = useState<string[]>([]);
    const [removedImages, setRemovedImages] = useState<string[]>([]);

    // ###### RHK ######
    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<CaseFormData>();

    // ###### Query Hooks ######
    const { data: cases } = useCases();
    const { mutateAsync: addCaseAsync, isPending: isAdding } = useSubmitCases();
    const { mutateAsync: updateCaseAsync, isPending: isUpdating } = useUpdateCases();
    const { mutateAsync: deleteCaseAsync, isPending: isDeleting } = useDeleteCases();



    // ###### Handlers ######
    const handleEdit = (item: CasesFormValues) => {
        setSelectedCase(item);
        setExistingImages(Array.isArray(item.images) ? item.images : []);
        setRemovedImages([]);
        reset({
            title: item.title,
            description: item.description || "",
            images: item.images || [],
            remaining: item.remaining,
            min_amount: item.min_amount,
            type: item.type
        });
        setIsEditModalOpen(true);
    };

    const handleRemoveExistingImage = (url: string) => {
        setExistingImages((prev) => prev.filter((img) => img !== url));
        setRemovedImages((prev) => [...prev, url]);
    };

    const handleDelete = (item: CasesFormValues) => {
        setSelectedCase(item);
        setIsDeleteModalOpen(true);
    }

    // ###### Submit Funtions ######
    const addCase = async (data: CaseFormData) => {
        try {
            const { imageFiles, ...casesFields } = data

            await addCaseAsync({ casesItem: casesFields, files: imageFiles! })
            reset();
            setIsAddModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    }
    const editCase = async (data: CaseFormData) => {
        try {
            if (!selectedCase || !selectedCase.id) return;
            const { imageFiles, ...casesFields } = data;

            await updateCaseAsync({
                id: selectedCase.id,
                caseItem: { ...casesFields, images: existingImages },
                files: imageFiles,
                removedImages,
            });
            reset();
            setIsEditModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    }
    const destroyCase = async () => {
        try {
            if (!selectedCase || !selectedCase.id) return;
            await deleteCaseAsync(selectedCase)
            reset();
            setIsDeleteModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    }


    const columns: Column<CasesFormValues>[] = [
        { header: "عنوان", accessorKey: "title", className: "font-bold text-primary" },
        {
            header: "الوصف",
            cell: (item) => {
                const desc = item.description || "";
                return (
                    <span title={desc}>
                        {desc.length > 30 ? desc.slice(0, 30) + "..." : desc}
                    </span>
                );
            }
        },
        {
            header: "الإجراءات",
            cell: (item) => (
                <div className="flex items-center gap-2">
                    <button onClick={() => handleEdit(item)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                        <LuPencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(item)} disabled={isDeleting} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <LuTrash2 className="w-4 h-4" />
                    </button>
                </div>
            )
        },
    ];

    return (
        <div className="p-4 md:p-6 max-w-7xl mx-auto w-full" dir="rtl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">إدارة الحالات</h1>
                    <p className="text-slate-500">أضف، عدل، أو احذف الحالات التي تظهر في الموقع.</p>
                </div>
                <Button
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-4 py-5 bg-secondary text-[#11395f] hover:bg-[#e09831] font-bold gap-2 rounded-lg"
                >
                    <LuPlus className="w-5 h-5" />
                    إضافة حالة جديدة
                </Button>
            </div>

            {/* ###### Cases Table ###### */}
            <AdminTable
                data={cases || []}
                columns={columns}
                keyExtractor={(item) => item.id}
            />

            {/* ###### Add Modal ###### */}
            <AdminModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="إضافة حالة جديدة"
            >
                <form className="space-y-5" onSubmit={handleSubmit(addCase)}>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">عنوان الحالة</label>
                        <input
                            type="text"
                            {...register("title")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            placeholder="أدخل عنوان الحالة..."
                        />
                        {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">وصف تفصيلي</label>
                        <textarea
                            rows={4}
                            {...register("description")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all resize-none"
                            placeholder="اكتب تفاصيل الإنجاز هنا..."
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">نوع الحاجة</label>
                        <input
                            type="text"
                            {...register("type")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                        />
                        {errors.type && <p className="text-red-500 text-xs">{errors.type.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">الصور</label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register("imageFiles")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                        />
                        {errors.imageFiles && <p className="text-red-500 text-xs">{errors.imageFiles.message}</p>}
                    </div>
                    <div className="pt-4 flex gap-3">
                        <Button type="submit" className="flex-1 bg-secondary text-[#11395f] hover:bg-[#e09831] font-bold py-6 rounded-xl">
                            {isAdding || isSubmitting ? "جاري الحفظ..." : "حفظ الحالة"}                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsAddModalOpen(false)}
                            className="flex-1 font-bold py-6 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"
                        >
                            إلغاء
                        </Button>
                    </div>
                </form>
            </AdminModal>

            {/* ###### Edit Modal ###### */}
            <AdminModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="تعديل الحالة"
            >
                <form className="space-y-5" onSubmit={handleSubmit(editCase)}>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">عنوان الحالة</label>
                        <input
                            type="text"
                            {...register("title")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            placeholder="أدخل عنوان الحالة..."
                        />
                        {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">وصف تفصيلي</label>
                        <textarea
                            rows={4}
                            {...register("description")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all resize-none"
                            placeholder="اكتب تفاصيل الحالة هنا..."
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">نوع الحاجة</label>
                        <input
                            type="text"
                            {...register("type")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                        />
                        {errors.type && <p className="text-red-500 text-xs">{errors.type.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary mb-2">الصور</label>
                        {existingImages.length > 0 && (
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-primary mb-2">الصور الحالية</label>
                                <div className="flex flex-wrap gap-3">
                                    {existingImages.map((url) => (
                                        <div key={url} className="relative w-20 h-20 rounded-lg overflow-hidden border border-slate-200">
                                            <img src={url} alt="" className="w-full h-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveExistingImage(url)}
                                                className="absolute top-0.5 right-0.5 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            {...register("imageFiles")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                        />
                        {errors.imageFiles && <p className="text-red-500 text-xs">{errors.imageFiles.message}</p>}
                    </div>
                    <div className="pt-4 flex gap-3">
                        <Button type="submit" disabled={isUpdating || isSubmitting} className="flex-1 bg-secondary text-[#11395f] hover:bg-[#e09831] font-bold py-6 rounded-xl">
                            {isUpdating || isSubmitting ? "جاري التعديل..." : "تعديل الحالة"}                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsEditModalOpen(false)}
                            className="flex-1 font-bold py-6 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"
                        >
                            إلغاء
                        </Button>
                    </div>
                </form>
            </AdminModal>

            {/* ###### Delete Modal ###### */}
            <AdminModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                title="حذف الحالة"
            >
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); destroyCase(); }}>
                    <div>
                        <p>هل أنت متأكد من حذف هذه الحالة؟</p>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <Button type="submit" disabled={isDeleting} className="flex-1 bg-red-500 text-white hover:bg-red-600 font-bold py-6 rounded-xl">
                            {isDeleting ? "جاري الحذف..." : "حذف الحالة"}                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="flex-1 font-bold py-6 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"
                        >
                            إلغاء
                        </Button>
                    </div>
                </form>
            </AdminModal>
        </div>
    );
}
