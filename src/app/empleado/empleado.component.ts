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

  private habilitacionCuadro = false;
  private usuarioRegistrado = false;
  private txtRegistro = "No hay nadie registrado";
  constructor(){

  }

  ngOnInit(): void {

  }

  /// getters de los atributos
  public getNombre(){
    return this.nombre;
  }
  public getApellido(){
    return this.apellido;
  }
  public getEdad(){
    return this.edad;
  }
  public getHabilitacionCuadro(){
    return this.habilitacionCuadro;
  }
  public getUsuarioReguistrado(){
    return this.usuarioRegistrado;
  }
  public getTxtRegistro(){
    return this.txtRegistro;
  }
 // setters




//funciones de eventos
 /* public setUsuarioRegistrado(){
    alert("El usuario se acaba de registrar");
  }*/

  public setUsuarioRegistrado(event:Event){

    if((<HTMLInputElement> event.target).value == "si"){ //aqui se hace un casting del objeto que recibimos del evento
      this.txtRegistro = "El usuario se acaba de registrar";
    }
    else{
      this.txtRegistro = "no hay naide registrado";
    }
   }

  public llamaEmpresa(value:string){


  }

  public getRegistroUsuario2(){
    this.usuarioRegistrado = true;
  }



}
