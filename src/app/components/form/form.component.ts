import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Musica } from 'src/app/interfaces/Musica';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() updateDate: EventEmitter<any> = new EventEmitter();
  @Output() newItemEvent = new EventEmitter<any>();

  currentYear = new Date().getFullYear();

  @Input() nome!:string;
  @Input() artista!: string;
  @Input() album!: string;
  @Input() anoLancamento!: number;
  @Input() favoritar!: boolean;

  @Input() testeErrors: any = {
    nomeError: false,
    artistaError: false,
    albumError: false,
    anoLancamentoError: false,
    favoritarError: false
  }

  constructor() {}

  ngOnInit(): void {}
  convertBoolean = (inputValue: string | boolean) => inputValue == "true" ? true : false;

  salvarDados(){
    this.checkInputs();
    this.validateForm();
  }

  checkInputs(): void{
    !this.nome ? this.testeErrors.nomeError = true : this.testeErrors.nomeError = false;
    !this.artista ? this.testeErrors.artistaError = true : this.testeErrors.artistaError = false;
    !this.album  ? this.testeErrors.albumError = true : this.testeErrors.albumError = false;
    !this.anoLancamento || this.anoLancamento > this.currentYear ? this.testeErrors.anoLancamentoError = true : this.testeErrors.anoLancamentoError = false;
    !this.favoritar ? this.testeErrors.favoritarError = true : this.testeErrors.favoritarError = false;
  }

  validateForm(){
    const valuesErrors = Object.values(this.testeErrors);

    const musicaInput: Musica = {
      nome: this.nome,
      artista: this.artista,
      album: this.album,
      anoLancamento: this.anoLancamento,
      favoritar: this.convertBoolean(this.favoritar)
    }

    if(valuesErrors.some((value) => value == true)){
      alert('Algo de errado no Registro, tente novamente!')
    }else{
      alert('Tudo certo com o Registro!')
      this.newItemEvent.emit(musicaInput);
    }
  }

}
