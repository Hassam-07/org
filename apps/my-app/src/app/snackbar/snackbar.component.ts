import { Component, Input } from '@angular/core';

@Component({
  selector: 'org-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  @Input() message = '';
}
