import { Task, TaskFilter, TaskStats } from './types.js';

export function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

export function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
  return tasks.filter(task => {
    if (filter.status && task.status !== filter.status) return false;
    if (filter.priority && task.priority !== filter.priority) return false;
    if (filter.tag && !task.tags.includes(filter.tag)) return false;
    return true;
  });
}

export function sortByPriority(tasks: Task[]): Task[] {
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

export function calculateStats(tasks: Task[]): TaskStats {
  const byStatus = { todo: 0, in_progress: 0, done: 0 };
  const byPriority = { low: 0, medium: 0, high: 0 };

  let totalCompletionTime = 0;
  let completedCount = 0;

  for (const task of tasks) {
    byStatus[task.status]++;
    byPriority[task.priority]++;

    if (task.status === 'done' && task.completedAt) {
      totalCompletionTime += task.completedAt.getTime() - task.createdAt.getTime();
      completedCount++;
    }
  }

  return {
    total: tasks.length,
    byStatus,
    byPriority,
    completionRate: tasks.length > 0 ? completedCount / tasks.length : 0,
    averageCompletionTimeMs: completedCount > 0 ? totalCompletionTime / completedCount : null,
  };
}

export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

export function parseTag(input: string): string {
  return input.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
