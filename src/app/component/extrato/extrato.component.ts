import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/service/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any | undefined [];

  constructor(
    private service: TransferenciaService
  ) { }

  ngOnInit(): void {
    this.service.todasTransferencias().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    });
  }


}
