export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  createdAt: Date;
  completedAt: Date | null;
}

export interface TaskFilter {
  status?: Task['status'];
  priority?: Task['priority'];
  tag?: string;
}

export interface TaskStats {
  total: number;
  byStatus: Record<Task['status'], number>;
  byPriority: Record<Task['priority'], number>;
  completionRate: number;
  averageCompletionTimeMs: number | null;
}
