import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MaestrosUTL, RespuestaMaestros } from "./maestrosUTL";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProyectoapiService {
  private apiUrl = 'http://127.0.0.1:5000/api/maestros';

  constructor(private http: HttpClient) { }

  // Retorna RespuestaMaestros en lugar de MaestrosUTL[]
  public getMaestros(): Observable<RespuestaMaestros> {
    return this.http.get<RespuestaMaestros>(this.apiUrl);
  }

  agregarNuevoMaestro(datos: MaestrosUTL): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}
