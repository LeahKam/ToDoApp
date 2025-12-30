import {
  Container,
  NotFoundCode,
  NotFoundTitle,
  NotFoundMessage,
  HomeLink,
} from './styles'

export const NotFound = () => {
  return (
    <Container>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        The page you're looking for doesn't exist or has been moved.
      </NotFoundMessage>
      <HomeLink to="/">Go back home</HomeLink>
    </Container>
  )
}
