import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const meta: Meta<AppComponent> = {
  component: AppComponent,
  title: 'AppComponent',
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(HttpClientModule)] }),
  ],
};
export default meta;
type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {},
};
