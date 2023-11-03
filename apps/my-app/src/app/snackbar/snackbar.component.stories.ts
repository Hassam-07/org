import { Meta, applicationConfig } from '@storybook/angular';
import { SnackbarComponent } from './snackbar.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'SnackbarComponent',
  component: SnackbarComponent,
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(HttpClientModule)] }),
  ],
} as Meta<SnackbarComponent>;

export const snackbar = {
  render: (args: SnackbarComponent) => ({
    props: args,
  }),
  args: {
    message: 'Failed to fetch todos. Please try again later.',
  },
};
