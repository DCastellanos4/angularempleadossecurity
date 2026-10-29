import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/empleados.service';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {
  public subordinados!: Empleado[]
  constructor(private _cdr: ChangeDetectorRef, private _es: ServiceEmpleados, private _router: Router) {

  }
  async ngOnInit(): Promise<any> {
    let t = sessionStorage.getItem('token')
    if (t) {
      this.subordinados = await this._es.getSubordinados(t)
      this._cdr.detectChanges();
    }
  }
}
