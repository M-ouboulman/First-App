import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { CacheFlushComponent } from './cache-flush/cache-flush.component';
import { QueryComponent } from './query/query.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'cashe-flush', component: CacheFlushComponent },
  { path: 'query', component: QueryComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' }, // Default route
];
