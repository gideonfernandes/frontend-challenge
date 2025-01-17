import { ReactNode } from 'react'

export type LogoProps = { size?: number }
export type StarProps = { type: 'full' | 'half' | 'nothing' }
export type StarsProps = { size?: number; classification: number }

export type CategoriesProps = {
  fontSize?: number
  children: ReactNode
}
