import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const List = styled.div(() => {
  const { isMobile, spacing } = useThemeValues()

  return `
    display: flex;
    flex-direction: column;
    gap: ${isMobile ? spacing.sm : spacing.md};
    transition: all 0.2s ease;
  `
})
