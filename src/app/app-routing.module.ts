import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'store',
    loadChildren: './pages/home/store/store.module#StorePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './pages/auth/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/auth/register/register.module#RegisterPageModule'
  },
  {
    path: 'lost-password',
    loadChildren: './pages/auth/lost-password/lost-password.module#LostPasswordPageModule'
  },
  {
    path: 'error',
    children: [
      {
        path: '504',
        loadChildren: './pages/errors/no-internet/no-internet.module#NoInternetPageModule'
      },
      {
        path: '400',
        loadChildren: './pages/errors/bad-request/bad-request.module#BadRequestPageModule'
      },
      {
        path: '404',
        loadChildren: './pages/errors/not-found/not-found.module#NotFoundPageModule'
      },
      {
        path: '500',
        loadChildren: './pages/errors/internal-server-error/internal-server-error.module#InternalServerErrorPageModule'
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
