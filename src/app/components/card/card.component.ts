import { Component, OnInit, Input } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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
