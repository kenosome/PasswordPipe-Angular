import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contrasena:string = "esedf*99";
  _ocultarPassword:boolean = true;

  togglePassword(){
    this._ocultarPassword = !this._ocultarPassword;
  }
}
