import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { ServiceEmpleados } from './services/empleados.service';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { AuthGuard } from './guards/auth-guard';
import { SignalComponent } from './components/signal-component/signal-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    EmpleadosComponent,
    SubordinadosComponent,
    PerfilComponent,
    SignalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceEmpleados,
    AuthGuard,
  ],
  bootstrap: [App],
})
export class AppModule {}
