import { Component } from '@angular/core';

@Component({
  selector: 'app-blur',
  template: `
      <input type="text" #campoSenha  #campoInput />
      <input type="text" #campoVerificaSenha
      (blur)="verificadorDeSenha(campoSenha.value, campoVerificaSenha.value)"/>
      <button type="button" (click)="onClick(campoInput)">CLIQUE</button>
      <div>{{ textoSenha }}</div>
  `,
})
export class blurComponent {
  public textoSenha: String = '';
  public verificadorDeSenha(senha: string, verificaSenha: string): void{
    if(senha !== verificaSenha)
    this.textoSenha = 'Senhas não são iguais';
    else this.textoSenha = '';
  }
  public onClick(campoInput: HTMLInputElement): void {
    console.log(campoInput.value);
  }
}
