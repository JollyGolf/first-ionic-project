import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const loginFlag = localStorage.getItem('userToken');
const routes: Routes = [
  { path: '', redirectTo: loginFlag ? 'home': 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'current-hotel', loadChildren: () => import('./current-hotel/current-hotel.module').then( m => m.CurrentHotelPageModule)},
  { path: 'current-cell', loadChildren: () => import ('./current-cell/current-cell.module').then( m => m.CurrentCellPageModule)},
  { path: 'info-cell', loadChildren: () => import('./info-cell/info-cell.module').then(m => m.InfoCellPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
