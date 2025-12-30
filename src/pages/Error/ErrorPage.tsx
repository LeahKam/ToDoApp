import { useRouteError } from 'react-router-dom'
import { Container, ErrorTitle, ErrorMessage, HomeLink } from './styles'

export const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <Container>
      <ErrorTitle>Oops! Something went wrong</ErrorTitle>
      <ErrorMessage>
        {error?.message || 'An unexpected error occurred'}
      </ErrorMessage>
      <HomeLink to="/">Go back home</HomeLink>
    </Container>
  )
}
