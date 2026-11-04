type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className = "", title = "OrbitNode OV monogram" }: BrandMarkProps) {
  return (
    <svg className={className} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
      <title>{title}</title>
      <circle cx="42" cy="42" r="27.5" stroke="currentColor" strokeWidth="1.4" opacity=".75" />
      <ellipse cx="42" cy="42" rx="37" ry="14.5" transform="rotate(-34 42 42)" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="73.4" cy="19.2" r="3.3" fill="currentColor" />
      <text x="42" y="49" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-3" textAnchor="middle" fill="currentColor">OV</text>
    </svg>
  );
}
