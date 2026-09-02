type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path d="M4 14 14 4M6 4h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
