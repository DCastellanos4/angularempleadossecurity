import { computed, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ServiceSignal {
    public contador = signal(0);
    public doble = computed(() => {
        return this.contador() * 2
    })
    reiniciarContador(): void {
        this.contador.set(0);
    }
    modificarContador(): void {
        this.contador.update(value => value + 1)
    }
}