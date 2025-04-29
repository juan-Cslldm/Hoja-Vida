import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SobreMiComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOJA_VIDA';
}
