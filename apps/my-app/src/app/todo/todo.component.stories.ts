import { Meta, applicationConfig } from '@storybook/angular';
import { TodoComponent } from './todo.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'TodoComponent',
  component: TodoComponent,
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(HttpClientModule)] }),
  ],
} as Meta<TodoComponent>;

export const Primary = {
  render: (args: TodoComponent) => ({
    props: args,
  }),
  args: {},
};
export const Secondary = {
  render: (args: TodoComponent) => ({
    props: args,
  }),
  args: {},
};
