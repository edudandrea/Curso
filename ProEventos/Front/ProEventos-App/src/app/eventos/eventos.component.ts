import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public filteredEventos: any = [];
  public eventos: any = [];
  widthImg: number = 50;
  margin: number = 2;
  showImg: boolean = true;
  private _listFilter: string = '';

  public get listFilter(){
    return this._listFilter
  }

  public set listFilter(value: string){
    this._listFilter = value;
    this.filteredEventos = this.listFilter ? this.filterEventos(this.listFilter) : this.eventos;

  }
  filterEventos(filterBy: string):any{
    filterBy = filterBy.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) =>evento.tema.toLocaleLowerCase().indexOf(filterBy) !== -1||
      evento.local.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  changeImg(){
    this.showImg = !this.showImg;
  }

  public getEventos(): void{
      this.http.get('https://localhost:7188/api/Evento').subscribe(
      response =>{
        this.eventos = response;
        this.filteredEventos = this.eventos;
      },
      error =>console.log(error)

    );

  }

}
