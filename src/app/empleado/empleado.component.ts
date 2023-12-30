import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iria un empleado<p>" aqui metemos el html y podemos precindir de un fichero a parte de html
  styleUrls: ['./empleado.component.css'],
  //styles:["p{background-color:red;}"] esto es cuando queremos prescindir de usar un fichero css para los estilos,(Aqui lo añadimos directamente)
})
export class EmpleadoComponent implements OnInit{

  nombre="Macario";
  apellido="Pruebas";
  edad = 20;
  empresa="Google";

  constructor(){

  }

  ngOnInit(): void {

  }

}
