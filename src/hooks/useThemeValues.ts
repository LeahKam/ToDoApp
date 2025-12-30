import { useTheme } from 'styled-components'
import { useMediaQuery } from './useMediaQuery'

export const useThemeValues = () => {
  const theme = useTheme()

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
  const isTablet = useMediaQuery(
    `(min-width: calc(${theme.breakpoints.md} + 1px)) and (max-width: ${theme.breakpoints.lg})`
  )
  const isDesktop = useMediaQuery(
    `(min-width: calc(${theme.breakpoints.lg} + 1px))`
  )

  return {
    primaryColor: theme.colors.primary,
    primaryHoverColor: theme.colors.primaryHover,
    textColor: theme.colors.text.primary,
    backgroundColor: theme.colors.background.primary,
    borderLight: theme.colors.border.light,
    spacing: theme.spacing,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    breakpoints: theme.breakpoints,
    isMobile,
    isTablet,
    isDesktop,
  }
}
