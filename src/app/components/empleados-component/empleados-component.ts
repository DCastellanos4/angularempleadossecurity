import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-component',
  standalone: false,
  styleUrl: './empleados-component.css',
  templateUrl: './empleados-component.html',
})
export class EmpleadosComponent implements OnInit {
  public empleados!: Empleado[]
  constructor(private _cdr: ChangeDetectorRef, private _es: ServiceEmpleados, private _router: Router) {

  }
  async ngOnInit(): Promise<any> {
    let t = sessionStorage.getItem('token');
    if (t) {
      this.empleados = await this._es.getEmpleados(t)
      this._cdr.detectChanges()
      console.log(this.empleados);
    } else {
      this._router.navigate(['/login'])
    }
  }
}
