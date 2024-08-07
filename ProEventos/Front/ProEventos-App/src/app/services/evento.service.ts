import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../model/Evento';

@Injectable()
export class EventoService {
baseURL = 'https://localhost:7188/api/Evento';
constructor(private http: HttpClient) { }

public getEventos(): Observable<Evento[]> {
  return this.http.get<Evento[]>(this.baseURL);
}
public getEventosByTema(tema: string): Observable<Evento[]> {
  return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
}
public getEvento(id: number): Observable<Evento> {
  return this.http.get<Evento>(`${this.baseURL}/${id}`);
}

}
