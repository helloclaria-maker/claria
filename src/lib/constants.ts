import type { LucideIcon } from 'lucide-react'
import {
  CreditCard,
  Plane,
  Play,
  Shield,
} from 'lucide-react'
import icon1 from '../assets/feature-illustrations/icon1.png'
import icon2 from '../assets/feature-illustrations/icon2.png'
import icon3 from '../assets/feature-illustrations/icon3.png'
import icon4 from '../assets/feature-illustrations/icon4.png'
import icon5 from '../assets/feature-illustrations/icon5.png'
import icon6 from '../assets/feature-illustrations/icon6.png'
import icon7 from '../assets/feature-illustrations/icon7.png'
import icon8 from '../assets/feature-illustrations/icon8.png'

export type Feature = {
  image: string
  title: string
  description: string
}

export type QuickActionType = 'whatsapp' | 'phone' | 'email'

export type QuickAction = {
  type: QuickActionType
  label: string
}

export type ProductBenefit = {
  id: string
  name: string
  cardTone: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
  totalBenefits: number
  benefits: string[]
  moreCount: number
  quickActions: QuickAction[]
}

export const PRODUCT_BENEFITS: ProductBenefit[] = [
  {
    id: 'latam-pass',
    name: 'LATAM Pass Visa Signature',
    cardTone: 'bg-[#F4F1FF]',
    icon: Plane,
    iconBg: 'bg-[#7C5CFF]/12',
    iconColor: 'text-[#7C5CFF]',
    totalBenefits: 15,
    benefits: [
      'Sala VIP',
      'Equipaje extra',
      'Prioridad de embarque',
      'Seguro de viaje',
    ],
    moreCount: 214,
    quickActions: [
      { type: 'whatsapp', label: 'WhatsApp' },
      { type: 'phone', label: 'Llamar' },
    ],
  },
  {
    id: 'visa-signature',
    name: 'Visa Signature',
    cardTone: 'bg-[#EFF6FF]',
    icon: CreditCard,
    iconBg: 'bg-[#2F6BFF]/12',
    iconColor: 'text-[#2F6BFF]',
    totalBenefits: 15,
    benefits: [
      'Seguro de viaje',
      'Protección de compras',
      'Garantía extendida',
      'Valet Parking',
      'Concierge 24/7',
    ],
    moreCount: 11,
    quickActions: [
      { type: 'whatsapp', label: 'WhatsApp' },
      { type: 'phone', label: 'Llamar' },
    ],
  },
  {
    id: 'sura',
    name: 'SURA',
    cardTone: 'bg-[#ECFDF8]',
    icon: Shield,
    iconBg: 'bg-[#19C6A7]/12',
    iconColor: 'text-[#19C6A7]',
    totalBenefits: 9,
    benefits: [
      'Conductor elegido',
      'Grúa a domicilio',
      'Carro de reemplazo',
      'Atención médica 24/7',
      'Asistencia en carretera',
    ],
    moreCount: 5,
    quickActions: [
      { type: 'whatsapp', label: 'WhatsApp' },
      { type: 'phone', label: 'Llamar' },
    ],
  },
  {
    id: 'netflix',
    name: 'Netflix',
    cardTone: 'bg-[#FFF1F3]',
    icon: Play,
    iconBg: 'bg-[#FF5A5F]/12',
    iconColor: 'text-[#FF5A5F]',
    totalBenefits: 6,
    benefits: [
      'Descargas ilimitadas',
      'Perfiles múltiples',
      'Calidad 4K',
      'Audio espacial',
      'Contenido exclusivo',
    ],
    moreCount: 2,
    quickActions: [
      { type: 'email', label: 'Email' },
      { type: 'phone', label: 'Llamar' },
    ],
  },
]

export const FEATURES: Feature[] = [
  {
    image: icon1,
    title: '¿Tu seguro incluye conductor elegido?',
    description:
      'Muchas personas solo descubren que lo tienen cuando ya es demasiado tarde para usarlo.',
  },
  {
    image: icon2,
    title: '¿Sabías que algunos productos tienen beneficios en tu cumpleaños?',
    description:
      'Descuentos, experiencias o regalos que pasan desapercibidos cada año.',
  },
  {
    image: icon3,
    title: '¿Tu tarjeta da acceso a salas VIP o preventas exclusivas?',
    description:
      'Miles de personas pagan por estos beneficios sin saber que ya los tienen.',
  },
  {
    image: icon4,
    title: '¿Conoces todo lo que cubre el seguro de tu vehículo?',
    description:
      'Desde asistencia en carretera hasta carro de reemplazo o conductor elegido.',
  },
  {
    image: icon5,
    title: '¿Tu banco tiene descuentos en restaurantes que nunca has usado?',
    description:
      'Convenios que se renuevan cada mes y la mayoría jamás revisa.',
  },
  {
    image: icon6,
    title: '¿Tu tarjeta protege las compras o el celular que acabas de comprar?',
    description:
      'Coberturas que están activas por defecto y rara vez se reclaman.',
  },
  {
    image: icon7,
    title: '¿Tienes descuentos en hoteles y viajes sin saberlo?',
    description:
      'Tarifas preferenciales que se pierden por no consultarlas a tiempo.',
  },
  {
    image: icon8,
    title: '¿Tu medicina prepagada incluye consultas virtuales?',
    description:
      'Beneficios de bienestar incluidos en tu plan que nunca has utilizado.',
  },
]
