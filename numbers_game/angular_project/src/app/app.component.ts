import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludadorComponent } from "./saludador/saludador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project';
}
