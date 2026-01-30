
export default function Section({ title, subtitle, children, className = "" }) {
  return (
    <section className={`container-wide py-14 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
