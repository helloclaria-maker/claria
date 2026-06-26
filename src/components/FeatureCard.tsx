type FeatureCardProps = {
  image: string
  title: string
  description: string
}

export function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <article className="flex min-w-0 flex-col overflow-visible rounded-2xl border border-[#ECECF2] bg-white p-7 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_4px_20px_-4px_rgba(17,24,39,0.05)] transition-[transform,box-shadow,border-color] duration-200 hover:scale-[1.02] hover:border-[#E4E4EC] hover:shadow-[0_1px_2px_rgba(17,24,39,0.04),0_8px_24px_-8px_rgba(17,24,39,0.07)]">
      <img
        src={image}
        alt=""
        className="relative -mt-5 mx-auto block h-auto w-[54%] max-w-[151px] object-contain md:w-[60%] md:max-w-[168px]"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <h3 className="mt-5 mb-3 text-[14px] font-semibold leading-snug text-foreground md:text-[15px]">
        {title}
      </h3>
      <p className="text-[12px] leading-[1.7] font-normal text-muted-foreground md:text-[13px]">
        {description}
      </p>
    </article>
  )
}
