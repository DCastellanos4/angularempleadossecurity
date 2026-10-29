import { Component, inject, Service } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceAuthEmpleados: ServiceAuthEmpleados = inject(ServiceAuthEmpleados)
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  public contador = this._serviceSignal.contador
  public usuario = this._serviceAuthEmpleados.user;

  logOut(): void {
    this._serviceAuthEmpleados.logOut();
  }
}
