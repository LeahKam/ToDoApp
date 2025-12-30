import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.section(() => {
  const { isMobile, backgroundColor, spacing } = useThemeValues()

  return `
    background: ${backgroundColor};
    border-radius: 16px;
    padding: ${isMobile ? spacing.lg : spacing.xxl};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  `
})

export const Title = styled.h2(() => {
  const { isMobile, textColor, fontSize, fontWeight, spacing } =
    useThemeValues()

  return `
    margin: 0 0 ${isMobile ? spacing.lg : spacing.xl} 0;
    font-size: ${isMobile ? fontSize.lg : fontSize.xl};
    font-weight: ${fontWeight.semibold};
    color: ${textColor};
    transition: all 0.2s ease;
  `
})
