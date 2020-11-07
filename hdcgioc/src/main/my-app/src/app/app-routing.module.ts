/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 10:50:08
 * @LastEditors: Seven
 * @LastEditTime: 2020-08-21 11:24:40
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './page/index/heroes/heroes.component';


const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
