import { Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  public contador = this._serviceSignal.contador
}
