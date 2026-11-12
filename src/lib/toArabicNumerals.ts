export const toArabicNumerals = (str?: string | number | null) => {
    if (str == null || str === '') return '';
    return String(str).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
};
