import { Container, StatItem, StatValue, StatLabel } from './styles'

interface TodoStatsProps {
  total: number
  completed: number
  pending: number
}

export const TodoStats = ({ total, completed, pending }: TodoStatsProps) => {
  return (
    <Container>
      <StatItem>
        <StatValue>{total}</StatValue>
        <StatLabel>Total</StatLabel>
      </StatItem>
      <StatItem>
        <StatValue>{completed}</StatValue>
        <StatLabel>Completed</StatLabel>
      </StatItem>
      <StatItem>
        <StatValue>{pending}</StatValue>
        <StatLabel>Pending</StatLabel>
      </StatItem>
    </Container>
  )
}
