import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { configureStore } from '@reduxjs/toolkit'
import { Todo } from './Todo'
import type { Todo as TodoType } from '../../api/types'
import uiReducer from '../../store/slices/uiSlice'
import { theme } from '../../styles/theme'

const createMockStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
    },
  })
}

describe('Todo Component', () => {
  const mockTodo: TodoType = {
    userId: 1,
    id: 1,
    title: 'Test todo item',
    completed: false,
  }

  it('renders todo title', () => {
    const store = createMockStore()
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Todo todo={mockTodo} />
        </Provider>
      </ThemeProvider>
    )
    expect(screen.getByText('Test todo item')).toBeInTheDocument()
  })

  it('shows checkbox as unchecked when todo is not completed', () => {
    const store = createMockStore()
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Todo todo={mockTodo} />
        </Provider>
      </ThemeProvider>
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('shows checkbox as checked when todo is completed', () => {
    const store = createMockStore()
    const completedTodo: TodoType = { ...mockTodo, completed: true }
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Todo todo={completedTodo} />
        </Provider>
      </ThemeProvider>
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('toggles completion state when checkbox is clicked', () => {
    const store = createMockStore()
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Todo todo={mockTodo} />
        </Provider>
      </ThemeProvider>
    )
    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('applies completed styling to completed todos', () => {
    const store = createMockStore()
    const completedTodo: TodoType = { ...mockTodo, completed: true }
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Todo todo={completedTodo} />
        </Provider>
      </ThemeProvider>
    )
    const title = screen.getByText('Test todo item')
    expect(title).toHaveStyle({ textDecoration: 'line-through' })
  })
})
