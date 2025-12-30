import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.div(() => {
  const { spacing, isMobile } = useThemeValues()

  return `
    min-height: 100vh;
    background: #f5f8fa;
    padding: ${isMobile ? spacing.lg : spacing.xxl};
  `
})

export const Content = styled.div(() => {
  const { spacing, isDesktop, isTablet } = useThemeValues()

  return `
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: ${isDesktop ? '1fr 1.5fr' : '1fr'};
    gap: ${isTablet || isDesktop ? spacing.xxl : spacing.lg};
  `
})
