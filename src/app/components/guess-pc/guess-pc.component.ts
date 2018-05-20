import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-pc',
  templateUrl: './guess-pc.component.html'
})
export class GuessPcComponent implements OnInit {
  min = 1;
  max = 100;
  numero = Math.round((Math.random()+0.01)*100);
  numeroArr = [this.numero];
  gano = false;

  constructor() {

  }

  ngOnInit() {
  }

  menor(i){
    this.max = this.numeroArr[i];
    this.calcularNumero(this.min, this.max,i);
    let valor = Math.round(this.max-this.min);
    if((valor<=2 && this.min!=1) || (valor === 1)){
      this.adivino();
    }
  }

  mayor(i){
    this.min = this.numeroArr[i];
    this.calcularNumero(this.min, this.max,i);
    let valor = Math.round(this.max-this.min);
    if((valor<=2 && this.max!=100) || (valor === 1)){
      this.adivino();
    }
  }

  calcularNumero(min,max,i){
    if(this.min === 99 && this.max === 100){
      this.numero = 100;
      this.numeroArr[i+1] = this.numero;
    }else{
      this.numero = Math.round(((this.max-this.min+1)/2)+(this.min-1));
      this.numeroArr[i+1] = this.numero;
    }
  }

  adivino(){
    this.gano = true;
  }

  reset(){
    this.min = 1;
    this.max = 100;
    this.numero = Math.round((Math.random()+0.01)*100);
    this.numeroArr = [this.numero];
    this.gano = false;
  }

}
