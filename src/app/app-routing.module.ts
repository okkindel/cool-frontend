import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableViewTransitions: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
