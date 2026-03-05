import { Task } from './types.js';
import { generateId, filterTasks, sortByPriority, calculateStats } from './utils.js';

export class TaskManager {
  private tasks: Task[] = [];

  create(title: string, description: string, priority: Task['priority'] = 'medium', tags: string[] = []): Task {
    const task: Task = {
      id: generateId(),
      title,
      description,
      status: 'todo',
      priority,
      tags,
      createdAt: new Date(),
      completedAt: null,
    };
    this.tasks.push(task);
    return task;
  }

  getById(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  getAll(): Task[] {
    return [...this.tasks];
  }

  updateStatus(id: string, status: Task['status']): Task {
    const task = this.getById(id);
    if (!task) throw new Error(`Task ${id} not found`);

    task.status = status;
    if (status === 'done') {
      task.completedAt = new Date();
    } else {
      task.completedAt = null;
    }
    return task;
  }

  delete(id: string): boolean {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }

  search(query: string): Task[] {
    const lower = query.toLowerCase();
    return this.tasks.filter(
      t => t.title.toLowerCase().includes(lower) || t.description.toLowerCase().includes(lower)
    );
  }

  getFiltered(filter: { status?: Task['status']; priority?: Task['priority']; tag?: string }): Task[] {
    return sortByPriority(filterTasks(this.tasks, filter));
  }

  getStats() {
    return calculateStats(this.tasks);
  }
}

// Example usage
const manager = new TaskManager();

const task1 = manager.create('Setup CI/CD', 'Configure GitHub Actions pipeline', 'high', ['devops', 'infra']);
const task2 = manager.create('Write tests', 'Add unit tests for utils', 'medium', ['testing']);
const task3 = manager.create('Update README', 'Add API documentation', 'low', ['docs']);

manager.updateStatus(task1.id, 'in_progress');
manager.updateStatus(task2.id, 'done');

console.log('All tasks:', manager.getAll().length);
console.log('High priority:', manager.getFiltered({ priority: 'high' }).length);
console.log('Stats:', manager.getStats());
