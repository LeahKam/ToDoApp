import { Container } from './styles'

interface EmptyStateProps {
  message: string
}

export const EmptyState = ({ message }: EmptyStateProps) => {
  return <Container>{message}</Container>
}
