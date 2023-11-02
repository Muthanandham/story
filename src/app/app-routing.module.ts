import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
];

@NgModule({
  // declarations: [AppComponent, FirstComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
