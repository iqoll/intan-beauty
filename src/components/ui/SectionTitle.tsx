interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 px-4">
      <h2 className={`text-4xl md:text-5xl font-semibold mb-4 ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {subtitle && <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-zen-cream/80' : 'text-primary-light'}`}>{subtitle}</p>}
      <div className={`h-1 w-20 mx-auto mt-6 rounded-full ${light ? 'bg-secondary-light' : 'bg-secondary'}`}></div>
    </div>
  );
}
