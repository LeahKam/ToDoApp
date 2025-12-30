import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.header(() => {
  const { spacing } = useThemeValues()

  return `
    max-width: 1400px;
    margin: 0 auto ${spacing.xxxl};
    text-align: center;

    @media (max-width: 768px) {
      margin-bottom: ${spacing.xxl};
    }
  `
})

export const Title = styled.h1(() => {
  const { isMobile, primaryColor, fontSize, fontWeight, spacing } =
    useThemeValues()

  return `
    color: ${primaryColor};
    font-size: ${isMobile ? fontSize.xxl : fontSize.xxxl};
    font-weight: ${fontWeight.bold};
    margin: 0 0 ${spacing.sm} 0;
    transition: all 0.2s ease;
  `
})

export const Subtitle = styled.p(() => {
  const { isMobile, textColor, fontSize } = useThemeValues()

  return `
    color: ${textColor};
    font-size: ${isMobile ? fontSize.sm : fontSize.md};
    margin: 0;
    transition: all 0.2s ease;
  `
})
