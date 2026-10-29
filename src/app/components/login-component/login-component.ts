import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServiceEmpleados } from '../../services/empleados.service';
import { Router } from '@angular/router';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  @ViewChild('userName') userName!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  constructor(private _rt: Router, private _es: ServiceEmpleados) {

  }
  async login(): Promise<any> {
    let u = new Usuario(this.userName.nativeElement.value, this.password.nativeElement.value);
    console.log(u);
    let response = await this._es.login(u);
    if (response != null) {
      sessionStorage.setItem('ID', this.password.nativeElement.value)
      sessionStorage.setItem('token', response.response)
      await this._serviceAuth.logInEmpleadoAsync(parseInt(sessionStorage.getItem('ID')!), sessionStorage.getItem('token')!)
      this._rt.navigate(['/empleados'])
    }
  }

}
