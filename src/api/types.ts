export interface User {
  id: number
  name: string
  username: string
  email: string
}

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface ApiError {
  message: string
  status: number | undefined
}
