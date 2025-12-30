# React Users & TODOs Application - Copilot Instructions

## Project Overview

React TypeScript application for displaying users and their TODO items with filtering and state persistence.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 18 with TypeScript (strict mode)
- **State Management**:
  - React Query (TanStack Query) for server state
  - Redux Toolkit for UI state (selected user, filter)
- **Styling**: styled-components
- **Routing**: React Router v6.4+ with createBrowserRouter
- **HTTP Client**: axios
- **Functional Programming**: fp-ts (Either, Option, TaskEither, pipe)
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Folder Structure

```
src/
├── api/
│   ├── users.ts      # User API with fp-ts patterns
│   └── todos.ts      # TODO API with fp-ts patterns
├── components/
│   ├── User/
│   │   ├── User.tsx
│   │   ├── styles.ts
│   │   ├── useUser.ts
│   │   └── User.test.tsx
│   └── Todo/
│       ├── Todo.tsx
│       ├── styles.ts
│       ├── useTodo.ts
│       └── Todo.test.tsx
├── pages/
│   ├── Home/
│   ├── NotFound/
│   └── Error/
├── config/
│   └── routes/
│       └── index.ts  # Typed route definitions
└── store/
    └── slices/       # Redux Toolkit slices
```

## Development Guidelines

- Use fp-ts Either for error handling in API calls
- Use fp-ts Option for nullable values
- Use fp-ts TaskEither for async operations
- Use pipe for data transformations
- All components must have tests
- Custom hooks for all state logic
- No inline state in components
- Handle loading, error, and empty states
- Responsive design with Grid and Flexbox
- Type-safe route definitions

## API

- Base URL: https://jsonplaceholder.typicode.com
- Endpoints: /users, /todos
