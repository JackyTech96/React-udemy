export interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
