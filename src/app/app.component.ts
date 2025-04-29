import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SobreMiComponent, ContactoComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOJA_VIDA';
}
