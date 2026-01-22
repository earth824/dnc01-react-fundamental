export type Todo = {
  id: string;
  title: string;
  // status: 'pending' | 'ongoing' | 'completed';
  // priority: 'high' | 'medium' | 'low';
};

export type CreateTodo = (title: string) => void;
export type DeleteTodo = (id: Todo['id']) => void;
export type UpdateTodo = (id: Todo['id'], title: string) => void;
