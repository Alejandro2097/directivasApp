import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges{

  private _color:string = 'red';
  private _palabra:string = 'Este campo es requerido';

  htmlElement : ElementRef<HTMLElement>;
  @Input() set color(valor:string) {
     this._color = valor;
     this.setColor();
  }
  //@Input() palabra:string = 'holis';
  @Input() set palabra(valor:string){
    this._palabra = valor;
    this.setMensaje();
  }

  @Input() set valido(valor:boolean){
 
      if(valor){
        this.htmlElement.nativeElement.classList.add('hidden');
      }else {
        this.htmlElement.nativeElement.classList.remove('hidden');
      }
  }
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }
  ngOnChanges(changes: SimpleChanges): void {

  //  if(changes.mensaje){
  //    const mensajes = changes.palabra.currentValue;
  //    this.htmlElement.nativeElement.innerHTML = mensajes;
  //  }
  //  if(changes.color){
  //    const color =changes.color.currentValue;
  //    this.htmlElement.nativeElement.style.color = color;
  //  }
    
  }
   ngOnInit() {
     console.log(this.color);
     console.log(this.palabra);
     this.setEstilo();
     this.setColor();
     this.setMensaje();
   }
   setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
   }
   setColor():void{
     this.htmlElement.nativeElement.style.color = this._color;
     this.htmlElement.nativeElement.classList.add('form-text');
   }
   setMensaje():void{
     this.htmlElement.nativeElement.innerHTML = this._palabra;
   }
}
