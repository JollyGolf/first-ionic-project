import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'current-hotel', loadChildren: () => import('./current-hotel/current-hotel.module').then( m => m.CurrentHotelPageModule)},
  { path: 'current-cell', loadChildren: './current-cell/current-cell.module#CurrentCellPageModule' },
  { path: 'info-cell', loadChildren: './info-cell/info-cell.module#InfoCellPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
