import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iria un empleado<p>" aqui metemos el html y podemos precindir de un fichero a parte de html
  styleUrls: ['./empleado.component.css'],
  //styles:["p{background-color:red;}"] esto es cuando queremos prescindir de usar un fichero css para los estilos,(Aqui lo añadimos directamente)
})
export class EmpleadoComponent implements OnInit{

  private nombre="Macario";
  private apellido="Pruebas";
  private edad = 20;
  //private empresa="Google";

  constructor(){

  }

  ngOnInit(): void {

  }
  getNombre(){
    return this.nombre;
  }
  getApellido(){
    return this.apellido;
  }
  getEdad(){
    return this.edad;
  }
 /* getEmpresa(){
    return this.empresa;
  }*/

  public llamaEmpresa(value:string){


  }

}
