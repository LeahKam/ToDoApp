import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.div(() => {
  const { isMobile, fontSize, spacing } = useThemeValues()

  return `
    text-align: center;
    padding: ${isMobile ? spacing.xxl : spacing.huge};
    color: #e0245e;
    font-size: ${isMobile ? fontSize.sm : fontSize.md};
    background: rgba(29, 161, 242, 0.1);
    border-radius: 8px;
    border: 1px solid #e0245e;
    transition: all 0.2s ease;
  `
})
