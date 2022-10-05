import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  localStorage = localStorage.getItem("musicas");
  musicas: Musica[] = [...JSON.parse(this.localStorage!)];

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateData(newItem: any){
    this.musicas.push(newItem);
    localStorage.setItem("musicas", JSON.stringify(this.musicas));
  }

}
