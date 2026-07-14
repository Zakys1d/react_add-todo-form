interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user: User;
}

type Props = {
  todos: Todo[];
  renderTodo: (todo: Todo) => React.ReactNode;
};

export const TodoList = ({ todos, renderTodo }: Props) => (
  <section className="TodoList">{todos.map(todo => renderTodo(todo))}</section>
);
