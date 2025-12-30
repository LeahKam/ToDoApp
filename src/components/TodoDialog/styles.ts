import styled from 'styled-components'
import { useThemeValues } from '../../hooks/useThemeValues'

export const DialogOverlay = styled.div(() => {
  return `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 24px;
    backdrop-filter: blur(4px);
    animation: fadeIn 0.2s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `
})

export const DialogContainer = styled.div(() => {
  const { backgroundColor } = useThemeValues()

  return `
    background: ${backgroundColor};
    border-radius: 16px;
    width: 100%;
    max-width: 700px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease;

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `
})

export const DialogHeader = styled.div(() => {
  const { spacing, borderLight } = useThemeValues()

  return `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${spacing.xl} ${spacing.xl} ${spacing.lg} ${spacing.xl};
    border-bottom: 2px solid ${borderLight};
  `
})

export const DialogTitle = styled.h2(() => {
  const { textColor, fontSize, fontWeight } = useThemeValues()

  return `
    margin: 0;
    font-size: ${fontSize.xxl};
    font-weight: ${fontWeight.bold};
    color: ${textColor};
  `
})

export const DialogCloseButton = styled.button(() => {
  const { primaryColor, fontSize } = useThemeValues()

  return `
    background: transparent;
    border: none;
    font-size: ${fontSize.xxxl};
    line-height: 1;
    cursor: pointer;
    color: #657786;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    padding: 0;

    &:hover {
      background: #f5f8fa;
      color: ${primaryColor};
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  `
})

export const DialogContent = styled.div(() => {
  const { spacing } = useThemeValues()

  return `
    padding: ${spacing.lg} ${spacing.xl} ${spacing.xl} ${spacing.xl};
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: ${spacing.lg};

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f5f8fa;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #cbd6e0;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #aab8c2;
    }
  `
})
