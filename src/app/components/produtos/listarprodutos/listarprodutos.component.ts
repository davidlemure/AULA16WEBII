import { IProduto } from '../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../../services/produtos.service';


@Component({
  selector: 'app-listarProdutos',
  templateUrl: './listarProdutos.component.html',
  styleUrls: ['./listarProdutos.component.css']
})

export class ListarProdutosComponent implements OnInit {


    listaProdutos: IProduto[] = [];




  constructor(private produtosService: ProdutosService) {
  }




  ngOnInit(): void {
  }
  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno =>{
      this.listaProdutos = retorno;
    })
  }

}
