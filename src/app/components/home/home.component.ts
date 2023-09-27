import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;

  constructor()
  {
    console.log ('Nome do Produto: ', this.nomeProduto);
    console.log ('O' + this.anuncio + 'está em promoção');
    console.log (this.anuncio);
    console.log ('Id do Produto: ', this.idProduto);
    console.log ('Preço do Produto: ', this.precoProduto);
    console.log ('Promoção: ', this.promocao);

    let idade: number = 10;
    console.log ('Minha idade é: ', idade);

    function imprimeIdade() {
    var idade = 20;
    console.log ('Minha idade é: ', idade);
    }

    imprimeIdade();

  /*  function imprimeIdade2(){
      for (var idade = 30; idade <= 40; idade++ ){
        console.log('Idade dentro do for: ', idade)
      }
      console.log('Idade fora do for: ', idade)
    }
    imprimeIdade2() */

    function imprimeIdade3(){
      for (let idade = 30; idade <= 40; idade++ ){
        console.log('Idade dentro do for: ', idade)
      }
      console.log('Idade fora do for: ', idade)
    }
    imprimeIdade3()

    /*
    let a = 1;
    function bar(){
      console.log('variável a: ', a);
      let b = 2;
      if(true){
        let c = 3;
        let a = 4;
        console.log('a if: ', a);
        console.log('b if: ', b);
        console.log('c if: ', c);
      }
      console.log('a fora do if: ', a);
      console.log('b fora do if: ', b);
    }
    bar();
    */

    /*
    var a = 5;
    var b = 10;
    if(a = 5){
      let a = 4;
      var b = 1;
      console.log('Variável a dentro do if: ', a);
      console.log('Variável b dentro do if: ', b);
    }
    console.log('Variável a fora do if: ', a);
    console.log('Variável b fora do if: ', b);
    */

    /*
    let variavel = 0;
    let variavel = 10;
    console.log('Variável', variavel);
    function funcao() {
      let outra_variavel = 20;
      let outra_variavel = 30;
      console.log('outra variável: ', outra_variavel);
    }
    funcao();
    */

    /*
    var a = 10;
    var b = 20;
    function bar() {
      var a = 30;
      let b = 40;
      if(true) {
        var a = 50;
        let b = 60;
        console.log('Variável a dentro do if', a);
        console.log('Variável b dentro do if', b);
      }
      console.log('Variável a dentro da função', a);
      console.log('Variável b dentro da função', b);
    }
    bar();
    console.log('Variável a fora da função', a);
    console.log('Variável b fora da função', b);
    */
}



  ngOnInit(): void {
  }

}
