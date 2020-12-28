import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeClassComponent } from './age-class/age-class.component';
import { EducationComponent } from './education/education.component';
import { ProvinceComponent } from './province/province.component';
import { PeriodComponent } from './period/period.component';
import { SentenceComponent } from './sentence/sentence.component';
import { TypeCaseComponent } from './type-case/type-case.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzDividerModule, NzTableModule } from 'ng-zorro-antd';
import { DetailComponent } from './detail/detail.component';
import { LawStoryComponent } from './law-story/law-story.component';
import { LoginComponent } from './login/login.component';
import { NoPenaltyComponent } from './no-penalty/no-penalty.component';

@NgModule({
  declarations: [
    AgeClassComponent,
    EducationComponent,
    ProvinceComponent,
    PeriodComponent,
    SentenceComponent,
    TypeCaseComponent,
    DetailComponent,
    LawStoryComponent,
    LoginComponent,
    NoPenaltyComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NgZorroAntdModule,
    FormsModule,

  ],
  exports:[
    LoginComponent
  ]
})
export class LawModule { }
