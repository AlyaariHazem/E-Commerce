import { Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './components/public/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo:'public', pathMatch: 'full' },
  {
    path: 'public',
    loadChildren: () => import('./components/public/public.module').then(m => m.PublicModule)
  },
  { 
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component:PageNotFoundComponent},
];
