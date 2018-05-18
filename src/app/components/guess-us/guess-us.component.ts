import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-us',
  templateUrl: './guess-us.component.html'
})
export class GuessUsComponent implements OnInit {

  numero = Math.round((Math.random()+0.01)*100);
  numeroArr = [];
  gano = false;
  contador = 0;
  comparacion = '';

  constructor() {
  }

  ngOnInit() {
  }

  comprobar(num){
    if(this.validarNumero(num)){
      this.numeroArr[this.contador] = num;
      if(this.numero == num){
        this.adivino();
      }else if(num < this.numero){
        this.comparacion = "mayor";
      }else{
        this.comparacion = "menor";
      }
      this.contador++;
    }else{
      alert('El número ingresado no está comprendido entre 1 y 100. Intentelo nuevamente.');
    }

  }

  validarNumero(num){
    if (num>=1 && num<=100) {
        return true;
    } else {
        return false;
    }
  }

  adivino(){
    this.gano = true;
  }

  reset(){
    this.numero = Math.round((Math.random()+0.01)*100);
    this.numeroArr = [];
    this.gano = false;
    this.contador = 0;
    this.comparacion = '';
  }

}
