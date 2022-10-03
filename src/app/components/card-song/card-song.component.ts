import { Component, Input, OnInit } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent implements OnInit {

  @Input() data: Musica = {
    nome: "",
    artista: "",
    album: "",
    anoLancamento: 0,
    url: "",
    favoritar: false
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
