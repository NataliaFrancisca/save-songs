import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-template-initial-page',
  templateUrl: './template-initial-page.component.html',
  styleUrls: ['./template-initial-page.component.css']
})
export class TemplateInitialPageComponent implements OnInit {
  musicas: Musica[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  onUpdateData(newItem: any){
    console.log(newItem)
    this.musicas.push(newItem);
    console.log(this.musicas)
  }

}
