import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.div(() => {
  const { isMobile, textColor, fontSize, spacing } = useThemeValues()

  return `
    text-align: center;
    padding: ${isMobile ? spacing.xxl : spacing.huge};
    color: ${textColor};
    font-size: ${isMobile ? fontSize.sm : fontSize.md};
    transition: all 0.2s ease;
  `
})
