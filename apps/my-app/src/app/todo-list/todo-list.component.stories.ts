import {
  applicationConfig,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TodoListComponent } from './todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Todo } from '@org/api-interfaces';
import { TodoSkeletonComponent } from '../todo-skeleton/todo-skeleton.component';

const meta: Meta<TodoListComponent> = {
  component: TodoListComponent,
  title: 'TodoListComponent',
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(HttpClientModule)] }),
    moduleMetadata({ declarations: [TodoSkeletonComponent] }),
  ],
};
export default meta;
type Story = StoryObj<TodoListComponent>;

export const Default: Story = {
  args: {
    todos: [
      {
        id: 1,
        name: 'task 1',
        complete: false,
        pinned: false,
      },
      {
        id: 2,
        name: 'task 2',
        complete: false,
        pinned: false,
      },
      {
        id: 3,
        name: 'task 3',
        complete: false,
        pinned: false,
      },
      {
        id: 4,
        name: 'task 4',
        complete: false,
        pinned: false,
      },
      {
        id: 5,
        name: 'task 5',
        complete: false,
        pinned: false,
      },
      {
        id: 6,
        name: 'task 6',
        complete: false,
        pinned: false,
      },
      {
        id: 7,
        name: 'task 7',
        complete: false,
        pinned: false,
      },
      {
        id: 8,
        name: 'task 8',
        complete: false,
        pinned: false,
      },
      {
        id: 9,
        name: 'task 9',
        complete: false,
        pinned: false,
      },
      {
        id: 10,
        name: 'task 10',
        complete: false,
        pinned: false,
      },
      {
        id: 11,
        name: 'task 11',
        complete: false,
        pinned: false,
      },
      {
        id: 12,
        name: 'task 12',
        complete: false,
        pinned: false,
      },
      {
        id: 13,
        name: 'task 13',
        complete: false,
        pinned: false,
      },
      {
        id: 14,
        name: 'Complete homework assignment',
        complete: false,
        pinned: false,
      },
      {
        id: 15,
        name: 'Prepare for upcoming exam',
        complete: false,
        pinned: false,
      },
      {
        id: 16,
        name: 'Read a chapter from a book',
        complete: false,
        pinned: false,
      },
      {
        id: 17,
        name: 'Go for a morning jog',
        complete: false,
        pinned: false,
      },
      {
        id: 18,
        name: 'Practice playing the guitar',
        complete: false,
        pinned: false,
      },
      {
        id: 19,
        name: 'Write a short story',
        complete: false,
        pinned: false,
      },
      {
        id: 20,
        name: 'Learn a new recipe and cook dinner',
        complete: false,
        pinned: false,
      },
      {
        id: 21,
        name: 'Create a budget for the month',
        complete: false,
        pinned: false,
      },
      {
        id: 22,
        name: 'Watch a documentary on a topic of interest',
        complete: false,
        pinned: false,
      },
      {
        id: 23,
        name: 'Plan a weekend getaway',
        complete: false,
        pinned: false,
      },
      {
        id: 24,
        name: 'Organize the closet and donate unused clothes',
        complete: false,
        pinned: false,
      },
      {
        id: 25,
        name: 'Visit a local art gallery',
        complete: false,
        pinned: false,
      },
      {
        id: 26,
        name: 'Attend a live music concert',
        complete: false,
        pinned: false,
      },
      {
        id: 27,
        name: 'Plant flowers in the garden',
        complete: false,
        pinned: false,
      },
      {
        id: 28,
        name: 'Write a poem about nature',
        complete: false,
        pinned: false,
      },
      {
        id: 29,
        name: 'Volunteer at a local charity',
        complete: false,
        pinned: false,
      },
      {
        id: 30,
        name: 'Explore a new hiking trail',
        complete: false,
        pinned: false,
      },
      {
        id: 31,
        name: 'Take a photography walk in the park',
        complete: false,
        pinned: false,
      },
      {
        id: 32,
        name: 'Try a new restaurant and cuisine',
        complete: false,
        pinned: false,
      },
      {
        id: 33,
        name: 'Create a playlist of favorite songs',
        complete: false,
        pinned: false,
      },
      {
        id: 34,
        name: 'Write a letter to a friend or family member',
        complete: false,
        pinned: false,
      },
      {
        id: 35,
        name: 'Attend a workshop or seminar on a new topic',
        complete: false,
        pinned: false,
      },
      {
        id: 36,
        name: 'Start a daily journaling practice',
        complete: false,
        pinned: false,
      },
      {
        id: 37,
        name: 'Learn a new language online',
        complete: false,
        pinned: false,
      },
      {
        id: 38,
        name: 'Try a new workout routine',
        complete: false,
        pinned: false,
      },
      {
        id: 39,
        name: 'Create art using watercolors or acrylics',
        complete: false,
        pinned: false,
      },
      {
        id: 40,
        name: 'Visit a science museum',
        complete: false,
        pinned: false,
      },
      {
        id: 41,
        name: 'task-41',
        complete: false,
        pinned: false,
      },
      {
        id: 42,
        name: 'task-42',
        complete: false,
        pinned: false,
      },
      {
        id: 43,
        name: 'task-43',
        complete: false,
        pinned: false,
      },
      {
        id: 44,
        name: 'task-44',
        complete: false,
        pinned: false,
      },
      {
        id: 45,
        name: 'task-45',
        complete: false,
        pinned: false,
      },
      {
        id: 46,
        name: 'task-46',
        complete: false,
        pinned: false,
      },
      {
        id: 47,
        name: 'task-47',
        complete: false,
        pinned: false,
      },
      {
        id: 48,
        name: 'task-48',
        complete: false,
        pinned: false,
      },
      {
        id: 49,
        name: 'task-49',
        complete: false,
        pinned: false,
      },
      {
        id: 50,
        name: 'task-50',
        complete: false,
        pinned: false,
      },
      {
        id: 51,
        name: 'task-51',
        complete: false,
        pinned: false,
      },
      {
        id: 52,
        name: 'task-52',
        complete: false,
        pinned: false,
      },
      {
        id: 53,
        name: 'task-53',
        complete: false,
        pinned: false,
      },
      {
        id: 54,
        name: 'task-54',
        complete: false,
        pinned: false,
      },
      {
        id: 55,
        name: 'task-55',
        complete: false,
        pinned: false,
      },
      {
        id: 56,
        name: 'task-56',
        complete: false,
        pinned: false,
      },
      {
        id: 57,
        name: 'task-57',
        complete: false,
        pinned: false,
      },
      {
        id: 58,
        name: 'task-58',
        complete: false,
        pinned: false,
      },
      {
        id: 59,
        name: 'task-59',
        complete: false,
        pinned: false,
      },
      {
        id: 60,
        name: 'task-60',
        complete: false,
        pinned: false,
      },
      {
        id: 61,
        name: 'task-61',
        complete: false,
        pinned: false,
      },
      {
        id: 62,
        name: 'task-62',
        complete: false,
        pinned: false,
      },
      {
        id: 63,
        name: 'task-63',
        complete: false,
        pinned: false,
      },
      {
        id: 64,
        name: 'task-64',
        complete: false,
        pinned: false,
      },
      {
        id: 65,
        name: 'task-65',
        complete: false,
        pinned: false,
      },
      {
        id: 66,
        name: 'task-66',
        complete: false,
        pinned: false,
      },
      {
        id: 67,
        name: 'task-67',
        complete: false,
        pinned: false,
      },
      {
        id: 68,
        name: 'task-68',
        complete: false,
        pinned: false,
      },
      {
        id: 69,
        name: 'task-69',
        complete: false,
        pinned: false,
      },
      {
        id: 70,
        name: 'task-70',
        complete: false,
        pinned: false,
      },
      {
        id: 71,
        name: 'task-71',
        complete: false,
        pinned: false,
      },
      {
        id: 72,
        name: 'task-72',
        complete: false,
        pinned: false,
      },
    ],
    showLoader: true,
  },
};
export const loading: Story = {
  args: {
    todos: [
      {
        id: 1,
        name: 'task 1',
        complete: false,
        pinned: false,
      },
      {
        id: 1,
        name: 'task 1',
        complete: false,
        pinned: false,
      },
    ],
    showLoader: false,
  },
};
export const EmptyState: Story = {
  args: {
    todos: [],
    showLoader: true,
  },
};
export const lessTodos: Story = {
  args: {
    todos: [
      {
        id: 1,
        name: 'task 1',
        complete: true,
        pinned: false,
      },
      {
        id: 2,
        name: 'task 2',
        complete: true,
        pinned: false,
      },
    ],
    showLoader: true,
  },
};
export const completed: Story = {
  args: {
    todos: [
      {
        id: 1,
        name: 'task 1',
        complete: true,
        pinned: false,
      },
      {
        id: 1,
        name: 'task 1',
        complete: true,
        pinned: false,
      },
    ],
    showLoader: true,
  },
};

export const pinned: Story = {
  args: {
    todos: [
      {
        id: 1,
        name: 'task 1',
        complete: false,
        pinned: true,
      },
      {
        id: 1,
        name: 'task 1',
        complete: false,
        pinned: true,
      },
    ],
    showLoader: true,
  },
};
