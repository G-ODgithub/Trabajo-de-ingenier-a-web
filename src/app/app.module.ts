import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AnotacionesComponent } from './anotaciones/anotaciones.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClasesComponent } from './clases/clases.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { NotasComponent } from './notas/notas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ReunionesComponent } from './reuniones/reuniones.component';




const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent
  },
  {
    path:'',
    redirectTo:'/index',
    pathMatch: 'full'

  },
  {
    path:'evaluaciones',
    component: EvaluacionesComponent

  },
  {
    path:'materiales',
    component: MaterialesComponent
  },
  {
    path:'clases',
    component: ClasesComponent
  },
  {
    path:'anotaciones',
    component: AnotacionesComponent
  },
  {
    path: 'reuniones',
    component: ReunionesComponent
  },
  {
    path: 'notas',
    component: NotasComponent

  },
  {
  path:'noticias',
  component: NoticiasComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    AnotacionesComponent,
    IndexComponent,
    LoginComponent,
    RegistrarseComponent,
    NotfoundComponent,
    ReunionesComponent,
    ClasesComponent,
    EvaluacionesComponent,
    MaterialesComponent,
    NotasComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
