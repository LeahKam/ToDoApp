import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Grid = styled.div(() => {
  const { isMobile, spacing } = useThemeValues()

  return `
    display: grid;
    grid-template-columns: ${isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))'};
    gap: ${isMobile ? spacing.md : spacing.lg};
    transition: all 0.2s ease;
  `
})
