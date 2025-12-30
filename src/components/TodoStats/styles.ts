import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.div(() => {
  const { isMobile, spacing, backgroundColor } = useThemeValues()

  return `
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'};
    gap: ${isMobile ? spacing.sm : spacing.lg};
    padding: ${spacing.lg};
    background: ${backgroundColor};
    border-radius: 8px;
    margin-bottom: ${isMobile ? spacing.lg : spacing.xl};
    transition: all 0.2s ease;
  `
})

export const StatItem = styled.div(() => {
  const { isMobile } = useThemeValues()

  return `
    flex: 1;
    text-align: ${isMobile ? 'left' : 'center'};
    transition: all 0.2s ease;
  `
})

export const StatValue = styled.div(() => {
  const { isMobile, primaryColor, fontSize, fontWeight, spacing } =
    useThemeValues()

  return `
    font-size: ${isMobile ? fontSize.xl : fontSize.xxl};
    font-weight: ${fontWeight.bold};
    color: ${primaryColor};
    display: ${isMobile ? 'inline-block' : 'block'};
    margin-right: ${isMobile ? spacing.sm : '0'};
    transition: all 0.2s ease;
  `
})

export const StatLabel = styled.div(() => {
  const { isMobile, textColor, fontSize, spacing } = useThemeValues()

  return `
    font-size: ${fontSize.xs};
    color: ${textColor};
    text-transform: uppercase;
    display: ${isMobile ? 'inline-block' : 'block'};
    margin-top: ${isMobile ? '0' : spacing.xs};
    transition: all 0.2s ease;
  `
})
