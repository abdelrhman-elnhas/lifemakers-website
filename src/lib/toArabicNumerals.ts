export const toArabicNumerals = (str: string | number) => {
    return String(str).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
};