import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const ErrorContainer = styled.div(() => {
  const { spacing, isMobile } = useThemeValues()

  return `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${spacing.xxl};
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    ${isMobile ? `padding: ${spacing.lg};` : ''}
  `
})

export const ErrorTitle = styled.h1(() => {
  const { spacing, fontSize, isMobile } = useThemeValues()

  return `
    font-size: ${isMobile ? fontSize.xxl : fontSize.xxxl};
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 ${spacing.lg} 0;
  `
})

export const ErrorMessage = styled.p(() => {
  const { spacing, fontSize, isMobile } = useThemeValues()

  return `
    font-size: ${isMobile ? fontSize.md : fontSize.lg};
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 ${spacing.xxxl} 0;
    max-width: 600px;
  `
})

export const ErrorDetails = styled.details(() => {
  const { spacing, fontSize } = useThemeValues()

  return `
    margin: 0 0 ${spacing.xxxl} 0;
    max-width: 800px;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    padding: ${spacing.lg};
    border-radius: 8px;
    color: #ffffff;
    
    summary {
      cursor: pointer;
      font-weight: 600;
      margin-bottom: ${spacing.md};
      font-size: ${fontSize.md};
    }
    
    pre {
      text-align: left;
      overflow: auto;
      font-size: ${fontSize.sm};
      line-height: 1.5;
      margin: 0;
      padding: ${spacing.md};
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
  `
})

export const ReloadButton = styled.button(() => {
  const { spacing, fontSize, fontWeight } = useThemeValues()

  return `
    display: inline-block;
    padding: ${spacing.md} ${spacing.xxl};
    background: #ffffff;
    color: #667eea;
    border: none;
    border-radius: 24px;
    font-size: ${fontSize.md};
    font-weight: ${fontWeight.semibold};
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(0);
    }
  `
})
