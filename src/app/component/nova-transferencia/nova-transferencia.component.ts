import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/service/transferencia.service';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(
    private service: TransferenciaService
  ) { }

  ngOnInit(): void {
  }

  valor: number | undefined;
  destino: number | undefined;

  transferir() {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionarTransferencia(valorEmitir).subscribe
      (resultado => {
        console.log(resultado);
        this.limparCampos();
      },
       error => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
