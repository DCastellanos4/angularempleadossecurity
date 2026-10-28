import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChangeDetectorRef } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Usuario } from "../models/usuario";
import { Injectable } from "@angular/core";
import { Empleado } from "../models/empleado";

@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient) {
    }
    url = environment.urlApiEmpleados
    async login(u: Usuario): Promise<any> {
        let request = "auth/login"
        let user = JSON.stringify(u);
        let header = new HttpHeaders().set("Content-type", "application/json")
        return firstValueFrom(this._http.post(this.url + request, user, { headers: header }));
    }
    async getEmpleados(t: string): Promise<Empleado[]> {
        let request = "api/empleados"
        let header = new HttpHeaders().set("Content-type", "application/json").set("Authorization", "bearer " + t);
        return firstValueFrom(this._http.get<Empleado[]>(this.url + request, { headers: header }))
    }
    async getSubordinados(t: string): Promise<Empleado[]> {
        let request = "api/empleados/subordinados";
        let header = new HttpHeaders().set("Content-type", "application/json").set("Authorization", "bearer " + t);
        return firstValueFrom(this._http.get<Empleado[]>(this.url + request, { headers: header }))
    }
}