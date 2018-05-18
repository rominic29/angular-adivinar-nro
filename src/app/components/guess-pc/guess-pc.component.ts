import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-pc',
  templateUrl: './guess-pc.component.html'
})
export class GuessPcComponent implements OnInit {
  min = 1;
  max = 100;
  numero = Math.round((Math.random()+0.01)*100);//Math.round(((this.max-this.min+1)/2)+(this.min-1));
  numeroArr = [this.numero];
  gano = false;

  constructor() {

  }

  ngOnInit() {
  }

  menor(i){
    this.max = this.numeroArr[i];
    this.calcularNumero(this.min, this.max,i);
  }

  mayor(i){
    this.min = this.numeroArr[i];
    this.calcularNumero(this.min, this.max,i);
  }

  calcularNumero(min,max,i){
    this.numero = Math.round(((this.max-this.min+1)/2)+(this.min-1));
    this.numeroArr[i+1] = this.numero;
  }

  adivino(){
    this.gano = true;
  }

  reset(){
    this.min = 1;
    this.max = 100;
    this.numero = Math.round((Math.random()+0.01)*100); //Math.round(((this.max-this.min+1)/2)+(this.min-1));
    this.numeroArr = [this.numero];
    this.gano = false;
  }

}
