import styled from 'styled-components'
import { Link } from 'react-router-dom' // Used in styled(Link)
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.div(() => {
  const { spacing, isMobile } = useThemeValues()

  return `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f5f8fa;
    padding: ${spacing.xxl};
    text-align: center;
    
    ${isMobile ? `padding: ${spacing.lg};` : ''}
  `
})

export const NotFoundCode = styled.h1(() => {
  const { spacing, isMobile, primaryColor } = useThemeValues()

  return `
    font-size: ${isMobile ? '72px' : '120px'};
    font-weight: 700;
    color: ${primaryColor};
    margin: 0 0 ${spacing.lg} 0;
    line-height: 1;
  `
})

export const NotFoundTitle = styled.h2(() => {
  const { spacing, isMobile } = useThemeValues()

  return `
    font-size: ${isMobile ? '24px' : '32px'};
    font-weight: 600;
    color: #14171a;
    margin: 0 0 ${spacing.lg} 0;
  `
})

export const NotFoundMessage = styled.p(() => {
  const { spacing, fontSize, isMobile } = useThemeValues()

  return `
    font-size: ${isMobile ? fontSize.md : fontSize.lg};
    color: #657786;
    margin: 0 0 ${spacing.xxxl} 0;
    max-width: 500px;
  `
})

export const HomeLink = styled(Link)(() => {
  const { primaryColor, primaryHoverColor } = useThemeValues()

  return `
    display: inline-block;
    padding: 12px 24px;
    background: ${primaryColor};
    color: white;
    text-decoration: none;
    border-radius: 24px;
    font-weight: 600;
    transition: background 0.2s ease;

    &:hover {
      background: ${primaryHoverColor};
    }
  `
})
