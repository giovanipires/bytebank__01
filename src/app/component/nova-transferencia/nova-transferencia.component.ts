import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valor: number | undefined;
  destino: number | undefined;

  transferir() {
    console.log('Solicitada transferência');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }

}
