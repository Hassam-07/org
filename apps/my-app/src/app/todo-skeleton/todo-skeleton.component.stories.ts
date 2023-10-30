import { Meta, Story, applicationConfig } from '@storybook/angular';
import { TodoSkeletonComponent } from './todo-skeleton.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'TodoSkeletonComponent',
  component: TodoSkeletonComponent,
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(HttpClientModule)] }),
  ],
} as Meta<TodoSkeletonComponent>;

const Template: Story<TodoSkeletonComponent> = (
  args: TodoSkeletonComponent
) => ({
  component: TodoSkeletonComponent,
  props: args,
});
export const Default = Template.bind({});
Default.args = {};
