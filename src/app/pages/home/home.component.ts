import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musicas: Musica[] = [];

  constructor() { }

  ngOnInit(): void {
    const storage = localStorage.getItem("musicas");
    if(!storage){
      localStorage.setItem("musicas", JSON.stringify([]));
    }else{
      this.musicas.push(...JSON.parse(storage));
    }
  }

  onUpdateData(newItem: any){
    this.musicas.push(newItem);
    localStorage.setItem("musicas", JSON.stringify(this.musicas));
  }
}
