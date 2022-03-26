import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./pages/image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
  {
    path: 'detalle-envio',
    loadChildren: () => import('./pages/detalle-envio/detalle-envio.module').then( m => m.DetalleEnvioPageModule)
  },
  {
    path: 'checkout-intructions',
    loadChildren: () => import('./pages/checkout-intructions/checkout-intructions.module').then( m => m.CheckoutIntructionsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule   {




 }
