import { useHome } from './useHome'
import { useThemeValues } from '../../hooks/useThemeValues'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Section } from '../../components/Section/Section'
import { UsersSectionContent } from '../../components/UsersSectionContent/UsersSectionContent'
import { TodosSectionContent } from '../../components/TodosSectionContent/TodosSectionContent'
import { TodoDialog } from '../../components/TodoDialog/TodoDialog'
import { Container, Content } from './styles'
import * as O from 'fp-ts/Option'

export const Home = () => {
  const {
    users,
    usersLoading,
    usersError,
    todos,
    todosLoading,
    todosError,
    selectedUserId,
    hideCompleted,
    handleToggleFilter,
    stats,
    isDialogOpen,
    handleOpenDialog,
    handleCloseDialog,
    selectedUserName,
  } = useHome()

  const { isDesktop } = useThemeValues()
  const hasSelectedUser = O.isSome(selectedUserId)

  const shouldUseDialog = !isDesktop && hasSelectedUser
  const onUserClick = shouldUseDialog ? O.some(handleOpenDialog) : O.none

  return (
    <Container>
      <PageHeader
        title="Users & TODOs"
        subtitle="Select a user to view their todo items"
      />

      <Content>
        <Section title="Users">
          <UsersSectionContent
            usersLoading={usersLoading}
            usersError={usersError}
            users={users}
            onUserClick={onUserClick}
          />
        </Section>

        {isDesktop && (
          <Section title="TODOs">
            <TodosSectionContent
              selectedUserId={selectedUserId}
              todosLoading={todosLoading}
              todosError={todosError}
              todos={todos}
              hideCompleted={hideCompleted}
              onToggleFilter={handleToggleFilter}
              stats={stats}
            />
          </Section>
        )}
      </Content>

      {shouldUseDialog && (
        <TodoDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          userName={selectedUserName}
          todos={todos}
          todosLoading={todosLoading}
          todosError={todosError}
          hideCompleted={hideCompleted}
          onToggleFilter={handleToggleFilter}
          stats={stats}
        />
      )}
    </Container>
  )
}
