// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: CreateComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  { path: 'detalhar',
    component: DetalheComponent
  },
  { path: '', redirectTo: '/create', pathMatch: 'full'},
  {path: '**', component: CreateComponent}
];
