import { Container } from './styles'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <Container>Error: {message}</Container>
}
