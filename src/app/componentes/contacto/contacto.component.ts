import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo: string = 'Contacto';
  contenido: string = '';
  nombre: string = '';
  email: string = '';
  Telefono: string = '';
}
