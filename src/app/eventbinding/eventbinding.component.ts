import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

habilitarBotao: boolean = false;
valores: string [] = [];
idade: number = 0;

  constructor() { }

  ngOnInit() {
  }

  verIdade(valor): void {
let ano = new Date();
this.idade = ano.getFullYear() - valor;
}


  meuClick(): void {
console.log('evento meuClick do botão');
}
digitou($event): void {
console.log($event);
}
  digitouVarTemplate(valor): void {
console.log(valor);
}

validaSenha(valor: string): void {
if(valor.length >= 5){
this.habilitarBotao = true;
}
else{
this.habilitarBotao = false;
}
}
gravarSenha(senha): void {
alert('senha gravada com sucesso sua senha é: ' + senha);

}

adicionar(conteudo: string): void {
this.valores.push(conteudo);
}

}
