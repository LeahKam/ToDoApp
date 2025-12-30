import { Component, ErrorInfo, ReactNode } from 'react'
import * as O from 'fp-ts/Option'
import {
  ErrorContainer,
  ErrorTitle,
  ErrorMessage,
  ErrorDetails,
  ReloadButton,
} from './styles'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: O.Option<Error>
  errorInfo: O.Option<ErrorInfo>
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: O.none,
      errorInfo: O.none,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error: O.some(error),
    }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error: O.some(error),
      errorInfo: O.some(errorInfo),
    })
  }

  handleReload = (): void => {
    this.setState({
      hasError: false,
      error: O.none,
      errorInfo: O.none,
    })
    window.location.reload()
  }

  override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      const errorMessage = O.fold(
        () => 'An unexpected error occurred',
        (error: Error) => error.message
      )(this.state.error)

      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          {O.isSome(this.state.errorInfo) && (
            <ErrorDetails>
              <summary>Error Details</summary>
              <pre>{this.state.errorInfo.value.componentStack}</pre>
            </ErrorDetails>
          )}
          <ReloadButton onClick={this.handleReload}>
            Reload Application
          </ReloadButton>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
}
