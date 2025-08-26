import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateButtonComponent } from "./feature/state-button/state-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StateButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'state-management-test';
}
