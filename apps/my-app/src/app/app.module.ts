import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TodoComponent } from './todo/todo.component';
import { CoreDataModule } from '@org/core-data';
import { WidgetsService } from './wigdets/widgets.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CoreStateModule } from '@org/core-state';
import { MaterialModule } from '@org/material';
import { UiToolbarModule } from '@org/ui-toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoSkeletonComponent } from './todo-skeleton/todo-skeleton.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoSkeletonComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    MaterialModule,
    UiToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
