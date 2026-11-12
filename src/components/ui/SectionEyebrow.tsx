interface SectionEyebrowProps {
    label: string;
    index?: string;
    className?: string;
  }
  
  export function SectionEyebrow({
    label,
    index,
    className = "",
  }: SectionEyebrowProps) {
    return (
      <p
      data-reveal
        className={`flex items-center gap-4 text-eyebrow tracking-[0.2em] uppercase ${className}`}
    >
      {index ? <span aria-hidden>{index}</span> : null}
      <span aria-hidden className="h-px w-10 bg-current opacity-50" />
      <span data-reveal-text>{label}</span>
    </p>
  );
}