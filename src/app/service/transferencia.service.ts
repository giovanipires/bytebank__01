import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any | undefined [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todasTransferencias(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia) {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
