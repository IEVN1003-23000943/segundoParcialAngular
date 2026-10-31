export interface MaestrosUTL {
  idmaestro: number;
  amaterno: string;
  apaterno: string;
  correo: string;
  nombre: string;
}

export interface RespuestaMaestros {
  Maestros: MaestrosUTL[]; // "Maestros" con 'M' mayúscula para coincidir con la API
  exito: boolean;
  mensaje: string;
}
