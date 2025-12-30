import { Container, Label, Checkbox } from './styles'

export interface TodoFilterProps {
  checked: boolean
  onChange: () => void
}

export const TodoFilter = ({ checked, onChange }: TodoFilterProps) => {
  return (
    <Container>
      <Label>
        <Checkbox checked={checked} onChange={onChange} />
        Hide completed
      </Label>
    </Container>
  )
}
