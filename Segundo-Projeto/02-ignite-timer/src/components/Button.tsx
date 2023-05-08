import { ButtonContainer, ButtonVariat } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariat
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
