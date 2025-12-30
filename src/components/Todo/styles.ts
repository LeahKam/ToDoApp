import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const TodoContainer = styled.div(() => {
  const { backgroundColor, primaryColor, borderLight, spacing } =
    useThemeValues()

  return `
    display: flex;
    align-items: center;
    gap: ${spacing.md};
    padding: ${spacing.md} ${spacing.lg};
    background: ${backgroundColor};
    border: 1px solid ${borderLight};
    border-radius: 8px;
    transition: all 0.15s ease;

    &:hover {
      border-color: ${primaryColor};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `
})

export const Checkbox = styled.input.attrs({ type: 'checkbox' })(() => {
  const { primaryColor } = useThemeValues()

  return `
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: ${primaryColor};
    flex-shrink: 0;
  `
})

export const TodoTitle = styled.span<{ $completed: boolean }>(
  ({ $completed }) => {
    const { textColor, fontSize } = useThemeValues()

    return `
    flex: 1;
    font-size: ${fontSize.sm};
    line-height: 1.5;
    color: ${$completed ? '#657786' : textColor};
    text-decoration: ${$completed ? 'line-through' : 'none'};
    word-break: break-word;
  `
  }
)
