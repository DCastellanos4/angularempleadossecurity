import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServiceEmpleados } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild('userName') userName!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  constructor(private _rt: Router, private _es: ServiceEmpleados) {

  }
  async login(): Promise<any> {
    let u = new Usuario(this.userName.nativeElement.value, this.password.nativeElement.value);
    console.log(u);
    let response = await this._es.login(u);
    if (response != null) {
      sessionStorage.setItem('token', response.response)
      this._rt.navigate(['/empleados'])
    }
  }
  logOut(): void {
    sessionStorage.clear()
  }
}
