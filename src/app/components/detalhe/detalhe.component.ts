import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  user: any;
  experiencias: any;
  formacoes: any;
  constructor() { }

  ngOnInit() {
  }

}
