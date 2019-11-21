import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StorePage} from './store.page';

const routes: Routes = [
  {
    path: '',
    component: StorePage,
    children: [
      {
        path: 'mirror',
        children: [
          {
            path: '',
            loadChildren: './mirror/mirror.module#MirrorPageModule'
          },
          {
            path: 'settings',
            loadChildren: './mirror/mirror-settings/mirror-settings.module#MirrorSettingsPageModule'
          }
        ]
      },
      {
        path: 'app',
        loadChildren: './app/app.module#AppPageModule'
      },
      {
        path: 'app-details',
        children: [
          {
            path: '',
            loadChildren: './app/app-details/app-details.module#AppDetailsPageModule',
          },
        ]
      },
      {
        path: 'search',
        loadChildren: './search/search.module#SearchPageModule'
      },
      {
        path: '',
        redirectTo: '/store/mirror',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/store/mirror',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StorePageRoutingModule {
}
