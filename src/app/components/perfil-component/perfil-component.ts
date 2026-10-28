import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/empleados.service';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado
  constructor(private _es: ServiceEmpleados, private _rt: Router) {

  }
  async ngOnInit(): Promise<any> {
    if (sessionStorage.getItem('token')) {
      let id: number = parseInt(sessionStorage.getItem('ID')!)
      console.log(id);
      this.empleado = await this._es.getProfile(id, sessionStorage['token'])
      console.log(this.empleado);
    } else {
      this._rt.navigate(['/login'])
    }
  }

}
