import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary } from './ErrorBoundary'
import { theme } from '../../styles/theme'

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('ErrorBoundary', () => {
  const originalError = console.error
  beforeAll(() => {
    console.error = vi.fn()
  })

  afterAll(() => {
    console.error = originalError
  })

  it('renders children when there is no error', () => {
    render(
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary>
      </ThemeProvider>
    )

    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('renders error UI when an error is thrown', () => {
    render(
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </ThemeProvider>
    )

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument()
    expect(screen.getByText('Test error')).toBeInTheDocument()
    expect(screen.getByText('Reload Application')).toBeInTheDocument()
  })

  it('renders custom fallback when provided', () => {
    const customFallback = <div>Custom Error Message</div>

    render(
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback={customFallback}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </ThemeProvider>
    )

    expect(screen.getByText('Custom Error Message')).toBeInTheDocument()
    expect(
      screen.queryByText('Oops! Something went wrong')
    ).not.toBeInTheDocument()
  })
})
