import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';
import { fakeData } from 'src/db/db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musicas: Musica[] = [...fakeData];

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateData(newItem: any){
    console.log(newItem)
    this.musicas.push(newItem);
    console.log(this.musicas)
  }
}
