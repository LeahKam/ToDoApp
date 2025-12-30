import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const Container = styled.div(() => {
  const { isMobile, backgroundColor, spacing } = useThemeValues()

  return `
    display: flex;
    align-items: center;
    gap: ${spacing.md};
    margin-bottom: ${isMobile ? spacing.lg : spacing.xl};
    padding: ${isMobile ? `${spacing.md} ${spacing.md}` : `${spacing.md} ${spacing.lg}`};
    background: ${backgroundColor};
    border-radius: 8px;
    transition: all 0.2s ease;
  `
})

export const Label = styled.label(() => {
  const { textColor, fontSize, spacing } = useThemeValues()

  return `
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    cursor: pointer;
    font-size: ${fontSize.sm};
    color: ${textColor};
    user-select: none;
  `
})

export const Checkbox = styled.input.attrs({ type: 'checkbox' })(() => {
  const { primaryColor } = useThemeValues()

  return `
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: ${primaryColor};
  `
})
