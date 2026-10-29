import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { AuthGuard } from './guards/auth-guard';
import { SignalComponent } from './components/signal-component/signal-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "empleados", component: EmpleadosComponent, canActivate: [AuthGuard] },
  {
    path: "subordinados",
    component: SubordinadosComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  { path: "signal", component: SignalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
