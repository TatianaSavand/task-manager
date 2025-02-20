export interface Task {
  title: string;
  description: string;
  due_date: Date;
  created_at: Date;
  status: string;
  is_completed: boolean;
  id: number;
}