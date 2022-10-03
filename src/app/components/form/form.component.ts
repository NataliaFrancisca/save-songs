import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  currentYear = new Date().getFullYear();

  @Output() updateDate: EventEmitter<any> = new EventEmitter();
  @Output() newItemEvent = new EventEmitter<any>();

  @Input() nome!:string;
  @Input() artista!: string;
  @Input() album!: string;
  @Input() url!: string;
  @Input() anoLancamento!: number;
  @Input() favoritar!: boolean;

  @Input() errorsForm: any = {
    nome: false,
    artista: false,
    album: false,
    url: false,
    anoLancamento: false,
    favoritar: false
  }

  constructor() {}

  ngOnInit(): void {}

  salvarDados(){
    this.checkInputs();
    this.validateForm();
  }

  checkInputs(): void{
    const validateInput = (value: boolean, key: string) => value ? this.errorsForm[key] = true :  this.errorsForm[key] = false;

    validateInput(!this.nome, 'nome');
    validateInput(!this.artista, 'artista');
    validateInput(!this.album, 'album');
    validateInput(!this.url || !urlRegex.test(this.url), 'url')
    validateInput(!this.anoLancamento || this.anoLancamento > this.currentYear || this.anoLancamento < 1800, 'anoLancamento');
  }

  cleanInputs(): void{
    this.nome = "";
    this.artista = "";
    this.album = "";
    this.url = "";
    this.anoLancamento = this.currentYear;
  }
  
  validateForm(){
    const valuesErrors = Object.values(this.errorsForm);

    const musicaInput: Musica = {
      nome: this.nome,
      artista: this.artista,
      album: this.album,
      anoLancamento: this.anoLancamento,
      url: this.url,
      favoritar: this.convertBoolean(this.favoritar)
    }

    if(valuesErrors.some((value) => value == true)){
      alert('Algo de errado no registro, tente novamente!')
    }else{
      alert('Tudo certo com o registro!')
      this.newItemEvent.emit(musicaInput);
      this.cleanInputs();
    }
  }

  convertBoolean = (inputValue: string | boolean) => inputValue ? true : false;
}
