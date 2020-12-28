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
import { AgeClassComponent } from './page/law/age-class/age-class.component';
import { DetailComponent } from './page/law/detail/detail.component';
import { EducationComponent } from './page/law/education/education.component';
import { LawStoryComponent } from './page/law/law-story/law-story.component';
import { LoginComponent } from './page/law/login/login.component';
import { NoPenaltyComponent } from './page/law/no-penalty/no-penalty.component';
import { PeriodComponent } from './page/law/period/period.component';
import { ProvinceComponent } from './page/law/province/province.component';
import { SentenceComponent } from './page/law/sentence/sentence.component';
import { TypeCaseComponent } from './page/law/type-case/type-case.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'index',component:HeroesComponent},
  {path:'type',component:TypeCaseComponent},
  {path:'sentence',component:SentenceComponent},
  {path:'education',component:EducationComponent},
  {path:'agecase',component:AgeClassComponent},
  {path:'province',component:ProvinceComponent},
  {path:'period',component:PeriodComponent},
  {path:'story',component:LawStoryComponent},
  {path:'nopenalty',component:NoPenaltyComponent},

  {path:'type/detail',component:DetailComponent},
  {path:'agecase/detail',component:DetailComponent},
  {path:'sentence/detail',component:DetailComponent},
  {path:'education/detail',component:DetailComponent},
  {path:'province/detail',component:DetailComponent},
  {path:'period/detail',component:DetailComponent},
  {path:'story/detail',component:DetailComponent},
  {path:'nopenalty/detail',component:DetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
