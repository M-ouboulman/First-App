import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component'; // Import standalone components
import { CacheFlushComponent } from './cache-flush/cache-flush.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent }, 
  { path: 'cashe-flush', component: CacheFlushComponent },
  { path: 'query', component: QueryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule {}
