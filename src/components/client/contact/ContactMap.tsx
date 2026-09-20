export default function ContactMap() {
  return (
    <div className="absolute top-0 inset-x-0 h-72 sm:h-96 w-full opacity-65 overflow-hidden pointer-events-none">
      <iframe
        title="موقع صناع الحياة بالمحلة الكبرى على الخريطة"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.79584789477!2d31.167667295836317!3d30.977916568660213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1789660428503!5m2!1sen!2seg"
        className="w-full h-full border-0 contrast-100 brightness-95"
        loading="lazy"
        tabIndex={-1}
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-100/40 via-slate-100/70 to-slate-50" />
    </div>
  );
}
