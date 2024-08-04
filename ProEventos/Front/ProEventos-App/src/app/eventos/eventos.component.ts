import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../model/Evento';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']

})
export class EventosComponent implements OnInit {

  public filteredEventos: Evento[] = [];
  public eventos: Evento[] = [];

  public widthImg = 50;
  public margin = 2;
  public showImg = true;
  public listedfilter = '';

  public  get listfilter(): string{
    return this.listedfilter;
  }

  public set listFilter(value: string){
    this.listedfilter = value;
    this.filteredEventos = this.listFilter ? this.filterEventos(this.listFilter) : this.eventos;

  }
  public filterEventos(filterBy: string): Evento[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }


  constructor(private eventoService: EventoService) { }

   public ngOnInit(): void {
    this.getEventos();
  }

   public changeImg(): void{
    this.showImg = !this.showImg;
  }

   public getEventos(): void{
      this.eventoService.getEventos().subscribe(
        {next: (evento: Evento[]) => {
        this.eventos = evento;
        this.filteredEventos = this.eventos;
      },
        error: (error: any) => console.log(error)


        });

  }

}
