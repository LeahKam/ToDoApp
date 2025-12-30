import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const UserCard = styled.div<{ $selected: boolean }>(({ $selected }) => {
  const { isMobile, backgroundColor, spacing, primaryColor, borderLight } =
    useThemeValues()

  return `
    background: ${backgroundColor};
    border: 2px solid ${$selected ? primaryColor : borderLight};
    border-radius: 16px;
    padding: ${isMobile ? spacing.lg : spacing.xl};
    transition: all 0.2s ease;
    cursor: pointer;
    box-shadow: ${$selected ? '0 4px 12px rgba(29, 161, 242, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
  `
})

export const UserName = styled.h3(() => {
  const { isMobile, textColor, fontSize, fontWeight, spacing } =
    useThemeValues()

  return `
    margin: 0 0 ${spacing.sm} 0;
    font-size: ${isMobile ? fontSize.md : fontSize.lg};
    font-weight: ${fontWeight.semibold};
    color: ${textColor};
    transition: all 0.2s ease;
  `
})

export const UserUsername = styled.p(() => {
  const { spacing, fontSize, textColor } = useThemeValues()

  return `
    margin: 0 0 ${spacing.lg} 0;
    font-size: ${fontSize.sm};
    color: ${textColor};
  `
})

export const ShowTodosButton = styled.button<{ $selected: boolean }>(
  ({ $selected }) => {
    const {
      primaryColor,
      primaryHoverColor,
      borderLight,
      textColor,
      spacing,
      fontSize,
      fontWeight,
    } = useThemeValues()

    return `
    background: ${$selected ? primaryColor : borderLight};
    color: ${$selected ? '#ffffff' : textColor};
    border: none;
    padding: ${spacing.md} ${spacing.xl};
    border-radius: 24px;
    font-size: ${fontSize.sm};
    font-weight: ${fontWeight.semibold};
    cursor: pointer;
    transition: all 0.15s ease;
    width: 100%;

    &:hover {
      background: ${$selected ? primaryHoverColor : '#d1d8dd'};
    }

    &:active {
      transform: scale(0.98);
    }
  `
  }
)
