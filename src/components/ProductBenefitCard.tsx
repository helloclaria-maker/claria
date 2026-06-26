import { Check, Mail, MessageCircle, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ProductBenefit, QuickAction, QuickActionType } from '../lib/constants'

type ProductBenefitCardProps = {
  product: ProductBenefit
}

const actionStyles: Record<
  QuickActionType,
  { bg: string; text: string; border: string; hover: string; Icon: LucideIcon }
> = {
  whatsapp: {
    bg: 'bg-[#E8F7EF]',
    text: 'text-[#16A34A]',
    border: 'border-[#16A34A]/12',
    hover: 'hover:bg-[#DCFCE7]',
    Icon: MessageCircle,
  },
  phone: {
    bg: 'bg-[#F3F0FF]',
    text: 'text-[#7B61FF]',
    border: 'border-[#7B61FF]/12',
    hover: 'hover:bg-[#EDE9FE]',
    Icon: Phone,
  },
  email: {
    bg: 'bg-[#EFF6FF]',
    text: 'text-[#2563EB]',
    border: 'border-[#2563EB]/12',
    hover: 'hover:bg-[#DBEAFE]',
    Icon: Mail,
  },
}

function QuickActionButton({ action }: { action: QuickAction }) {
  const { bg, text, border, hover, Icon } = actionStyles[action.type]

  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-colors duration-200 ${bg} ${text} ${border} ${hover}`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
      {action.label}
    </button>
  )
}

export function ProductBenefitCard({ product }: ProductBenefitCardProps) {
  const Icon = product.icon

  return (
    <article
      className={`flex h-full flex-col rounded-3xl p-8 shadow-[0_1px_2px_rgb(17_24_39_/_0.03),0_8px_32px_-12px_rgb(123_97_255_/_0.08)] transition-[transform,box-shadow] duration-200 hover:scale-[1.02] lg:p-9 ${product.cardTone}`}
    >
      <div className="mb-8 flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${product.iconBg}`}
        >
          <Icon
            className={`h-6 w-6 ${product.iconColor}`}
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold leading-snug text-foreground">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {product.totalBenefits} beneficios
          </p>
        </div>
      </div>

      <ul className="flex-1 space-y-4">
        {product.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-3 text-[13px] leading-[1.65] text-foreground/75"
          >
            <Check
              className="mt-0.5 h-3 w-3 shrink-0 text-primary"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-[#ECECF2] pt-4">
        <div className="flex flex-wrap gap-2">
          {product.quickActions.map((action) => (
            <QuickActionButton key={action.type} action={action} />
          ))}
        </div>
      </div>
    </article>
  )
}
