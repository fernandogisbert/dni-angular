import { Component } from '@angular/core';

@Component({
  selector: 'dni-root',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DNIComponent {
  title = 'dni-validator';
  dni:string= '';
  dniLeters: string[] = ["t", "r", "w", "a", "g","m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h","l", "c", "k", "e"];
  respuesta: string = '';
  // letraDni: string;
  letraIntroducida: string;
  posicionLetra:number;
  
  comprobar(){
    
    let numeroSinLetra: string | number = this.dni.slice(0,8);
    this.posicionLetra = Number(numeroSinLetra) % 23;
    this.letraIntroducida = this.dni[8].toLowerCase();

    if (this.dniLeters[this.posicionLetra] == this.letraIntroducida){
      this.respuesta = 'El dni es correcto';
    }else{
      this.respuesta= 'El dni no existe';
    }

    console.log(this.respuesta)
  }
  
}
