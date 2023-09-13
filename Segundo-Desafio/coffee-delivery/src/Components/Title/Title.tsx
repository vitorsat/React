import { ReactNode } from "react"
import { TitleL, TitleM, TitleS, TitleXl, TitleXs } from "./Title.styles"

interface TitleProps {
  size: 'XL' | 'L' | 'M' | 'S' | 'XS'
  children: ReactNode
}

export function Title({ size, children } : TitleProps) {
  switch (size) {
    case 'XL': 
      return <TitleXl>{children}</TitleXl>
    case 'L':
      return <TitleL>{children}</TitleL>
    case 'M':
      return <TitleM>{children}</TitleM>
    case 'S':
      return <TitleS>{children}</TitleS>
    case 'XS':
      return <TitleXs>{children}</TitleXs>
    default:
      return <TitleXl>{children}</TitleXl>
  }
}