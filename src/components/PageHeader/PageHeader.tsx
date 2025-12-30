import { Container, Title, Subtitle } from './styles'

export interface PageHeaderProps {
  title: string
  subtitle: string
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
