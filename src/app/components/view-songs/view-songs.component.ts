import { Component, OnInit, Input } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-view-songs',
  templateUrl: './view-songs.component.html',
  styleUrls: ['./view-songs.component.css']
})
export class ViewSongsComponent implements OnInit {
  @Input() musicas: Array<Musica> = [];

  constructor() { }

  ngOnInit(): void {
    console.log("aqui no filho", this.musicas)
  }


}
