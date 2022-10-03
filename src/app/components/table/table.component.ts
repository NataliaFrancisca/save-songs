import { Component, OnInit, Input } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() musicas: Array<Musica> = [];

  constructor() { }

  ngOnInit(): void {

    console.log("aqui no filho", this.musicas)
  }

}
