import { Component } from '@angular/core';

// SELECTOR ES EL NOMBRE QUE SE USARA PARA LLAMAR ESTE APP EN EL HTML INDEX PRINCIPAL SE LLAMARA ASI >> <app-root></app-root>
// templateUrl  ES LA URL DEL INDEX DE LA APP
//styleUrls ES LA URL DE LA HOJA DE ESTILOS DE LA APP
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//PROPIEDADES BASICAS DE ESTA APP EN HTML DE LA APP DE LLAMAN ASI {{title}}
export class AppComponent {
  title = 'miprimeraApp';
}
