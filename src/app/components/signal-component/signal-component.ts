import { Component, computed, inject, signal } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-signal-component',
  standalone: false,
  styleUrl: './signal-component.css',
  templateUrl: './signal-component.html',
})
export class SignalComponent {
  //Recuperamos nuestro servicio utilizando inject para que sea SINGLETON
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  //Esta variable apunta al contador del servicio
  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble;
  //Podemos utilizar computed() para acciones de un signal
  reiniciarContador(): void {
    this._serviceSignal.reiniciarContador()
  }
  modificarContador(): void {
    this._serviceSignal.modificarContador()
  }
}
