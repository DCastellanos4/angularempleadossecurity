import { Injectable, signal } from "@angular/core";
import { Empleado } from "../models/empleado";
import { ServiceEmpleados } from "./empleados.service";

@Injectable({ providedIn: 'root' })
export class ServiceAuthEmpleados {
    constructor(private _es: ServiceEmpleados) {

    }
    public user = signal<Empleado | null>(null);
    async logInEmpleadoAsync(id: number, token: string): Promise<void> {
        sessionStorage.setItem('token', token)
        let t = sessionStorage.getItem('token');
        //Recuperamos el empleado con el token
        if (t) {
            let empleado = await this._es.getProfile(id, t);
            this.user.set(empleado)
        }
    }
    logOut(): void {
        sessionStorage.removeItem('token')
        this.user.set(null);
    }
}