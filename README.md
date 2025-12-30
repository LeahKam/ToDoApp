# Users & TODOs Application

A React TypeScript application that displays a list of users and their TODO items with filtering capabilities and state persistence.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## What It Does

- Browse users from JSONPlaceholder API
- Click a user to see their todos
- Check/uncheck tasks (persists on refresh)
- Filter completed tasks
- Everything saves automatically

## Tech Used

- React 18 + TypeScript
- Vite (fast dev server)
- Redux Toolkit (state)
- React Query (API data)
- styled-components (styling)
- fp-ts (functional patterns)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository or extract the project files

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── api/
│   ├── types.ts
│   ├── users.ts
│   └── todos.ts
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
│   │   ├── Home.tsx
│   │   ├── useHome.ts
│   │   └── styles.ts
│   ├── NotFound/
│   │   └── NotFound.tsx
│   └── Error/
│       └── ErrorPage.tsx
├── config/
│   ├── routes/
│   │   └── index.ts
│   └── api.ts
├── store/
│   ├── index.ts
│   ├── hooks.ts
│   └── slices/
│       └── uiSlice.ts
├── hooks/
│   ├── useWindowSize.ts
│   └── useThemeValues.ts
├── styles/
│   ├── theme.ts
│   └── shared.ts
└── utils/
    ├── routerState.ts
    └── apiUtils.ts
```

## How It Works

1. Loads users from JSONPlaceholder API
2. Click a user to see their todos
3. Check/uncheck boxes to toggle completion
4. Use "Hide Completed" filter

## Responsive Design

- **Desktop**: Side-by-side layout (users | todos)
- **Mobile/Tablet**: Todos open in a popup dialog

## API

JSONPlaceholder (free fake API):

- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/todos

## Author Leah Kamionka
