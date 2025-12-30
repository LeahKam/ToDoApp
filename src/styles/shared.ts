import styled, { css } from 'styled-components'
import { useThemeValues } from '../hooks/useThemeValues'

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`

export const absoluteFill = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Card = styled.div<{ $selected?: boolean }>(({ $selected }) => {
  const { isMobile, backgroundColor, primaryColor, borderLight, spacing } =
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
      border-color: ${primaryColor};
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(29, 161, 242, 0.4);
    }
  `
})

export const Container = styled.div(() => {
  const { isMobile, spacing } = useThemeValues()

  return `
    max-width: 1400px;
    margin: 0 auto;
    padding: ${isMobile ? spacing.lg : spacing.xxl};
    transition: all 0.2s ease;
  `
})

export const Section = styled.section(() => {
  const { isMobile, backgroundColor, borderLight, spacing } = useThemeValues()

  return `
    background: ${backgroundColor};
    border: 1px solid ${borderLight};
    border-radius: 16px;
    padding: ${isMobile ? spacing.lg : spacing.xxl};
    margin-bottom: ${isMobile ? spacing.lg : spacing.xxl};
    transition: all 0.2s ease;
  `
})

export const Grid = styled.div<{
  $gap?: string
  $minWidth?: string
}>(({ $gap, $minWidth = '280px' }) => {
  const { isMobile, spacing } = useThemeValues()

  return `
    display: grid;
    grid-template-columns: ${isMobile ? '1fr' : `repeat(auto-fill, minmax(${$minWidth}, 1fr))`};
    gap: ${$gap || (isMobile ? spacing.md : spacing.lg)};
    transition: all 0.2s ease;
  `
})

export const List = styled.div<{ $gap?: string }>(({ $gap }) => {
  const { spacing } = useThemeValues()

  return `
    ${flexColumn}
    gap: ${$gap || spacing.md};
  `
})

export const Title = styled.h1(() => {
  const { isMobile, textColor, fontSize, fontWeight } = useThemeValues()

  return `
    color: ${textColor};
    font-size: ${isMobile ? fontSize.xxl : fontSize.xxxl};
    font-weight: ${fontWeight.bold};
    margin: 0;
    transition: all 0.2s ease;
  `
})

export const Subtitle = styled.h2(() => {
  const { isMobile, textColor, fontSize, fontWeight } = useThemeValues()

  return `
    color: ${textColor};
    font-size: ${isMobile ? fontSize.md : fontSize.lg};
    font-weight: ${fontWeight.regular};
    margin: 0;
    transition: all 0.2s ease;
  `
})

export const Text = styled.p<{ $color?: 'primary' | 'secondary' | 'disabled' }>(
  ({ $color = 'primary' }) => {
    const { fontSize } = useThemeValues()

    const colorMap = {
      primary: '#14171a',
      secondary: '#657786',
      disabled: '#aab8c2',
    }

    return `
    color: ${colorMap[$color]};
    font-size: ${fontSize.md};
    line-height: 1.5;
    margin: 0;
  `
  }
)

export const Checkbox = styled.input.attrs({ type: 'checkbox' })(() => {
  const { primaryColor } = useThemeValues()

  return `
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: ${primaryColor};
    margin: 0;

    &:focus {
      outline: 2px solid ${primaryColor};
      outline-offset: 2px;
    }
  `
})

export const Label = styled.label<{ $completed?: boolean }>(
  ({ $completed }) => {
    const { textColor } = useThemeValues()

    return `
    color: ${$completed ? '#657786' : textColor};
    text-decoration: ${$completed ? 'line-through' : 'none'};
    cursor: pointer;
    user-select: none;
    transition: color 0.15s ease;
  `
  }
)
