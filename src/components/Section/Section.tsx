import { ReactNode } from 'react'
import { Container, Title } from './styles'

interface SectionProps {
  title: string
  children: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
