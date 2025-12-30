import { Container, Spinner, Message } from './styles'

interface LoadingMessageProps {
  message?: string
}

export const LoadingMessage = ({
  message = 'Loading...',
}: LoadingMessageProps) => {
  return (
    <Container>
      <Spinner />
      <Message>{message}</Message>
    </Container>
  )
}
