import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { configureStore } from '@reduxjs/toolkit'
import { User } from './User'
import type { User as UserType } from '../../api/types'
import uiReducer from '../../store/slices/uiSlice'
import { theme } from '../../styles/theme'
import * as O from 'fp-ts/Option'

const createMockStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
    },
  })
}

describe('User Component', () => {
  const mockUser: UserType = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
  }

  it('renders user name and username', () => {
    const store = createMockStore()
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <User user={mockUser} onUserClick={O.none} />
        </Provider>
      </ThemeProvider>
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('@johndoe')).toBeInTheDocument()
  })

  it('shows "Show TODOs" button when not selected', () => {
    const store = createMockStore()
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <User user={mockUser} onUserClick={O.none} />
        </Provider>
      </ThemeProvider>
    )

    expect(screen.getByText('Show TODOs')).toBeInTheDocument()
  })

  it('dispatches action when clicked', () => {
    const store = createMockStore()
    const dispatchSpy = vi.spyOn(store, 'dispatch')

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <User user={mockUser} onUserClick={O.none} />
        </Provider>
      </ThemeProvider>
    )

    const button = screen.getByText('Show TODOs')
    fireEvent.click(button)
    expect(dispatchSpy).toHaveBeenCalled()
  })
})
