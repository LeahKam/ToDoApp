import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.div(() => {
  const { isMobile, spacing } = useThemeValues()

  return `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${isMobile ? spacing.xxl : spacing.huge};
    gap: ${spacing.lg};
    transition: all 0.2s ease;
  `
})

export const Spinner = styled.div(() => {
  const { primaryColor, borderLight } = useThemeValues()

  return `
    width: 40px;
    height: 40px;
    border: 4px solid ${borderLight};
    border-top-color: ${primaryColor};
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `
})

export const Message = styled.p(() => {
  const { textColor, fontSize } = useThemeValues()

  return `
    margin: 0;
    color: ${textColor};
    font-size: ${fontSize.md};
    font-weight: 500;
  `
})
