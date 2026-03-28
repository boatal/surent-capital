type SectionProps = {
  className?: string;
  id?: string;
  minHeight?: string;
  tone?: string;
  leftRule?: boolean;
  children: React.ReactNode;
};

export function Section({ className = "", id, children }: SectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
