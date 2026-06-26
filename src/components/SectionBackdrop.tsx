type SectionBackdropProps = {
  src: string
  className?: string
}

export function SectionBackdrop({ src, className = '' }: SectionBackdropProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        className="absolute top-1/2 left-1/2 h-auto w-[min(920px,95vw)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.12] select-none lg:w-[min(1100px,85vw)]"
      />
    </div>
  )
}
