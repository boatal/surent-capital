type SectionTagProps = {
  children: string;
  className?: string;
};

export function SectionTag({ children, className }: SectionTagProps) {
  return <span className={`section-tag ${className ?? ""}`.trim()}>{children}</span>;
}
