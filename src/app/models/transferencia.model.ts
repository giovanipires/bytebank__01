export interface Transferencia {
  id?: number | string;
  valor: number | string | undefined;
  destino: number |string | undefined;
  data?: Date | string;
}
