import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { verifyTokenGuard } from './auth/guards/verify-token.guard';
import { AppComponent } from './app.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterPageComponent,
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard], component: CharactersPageComponent
  },
  {
    path: 'detail/:id', component: DetailComponent
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
