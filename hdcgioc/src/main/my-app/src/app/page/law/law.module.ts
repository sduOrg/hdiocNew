import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeClassComponent } from './age-class/age-class.component';
import { EducationComponent } from './education/education.component';
import { ProvinceComponent } from './province/province.component';
import { PeriodComponent } from './period/period.component';
import { SentenceComponent } from './sentence/sentence.component';
import { TypeCaseComponent } from './type-case/type-case.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzDividerModule, NzTableModule } from 'ng-zorro-antd';
import { DetailComponent } from './detail/detail.component';
import { LawStoryComponent } from './law-story/law-story.component';

@NgModule({
  declarations: [
    AgeClassComponent,
    EducationComponent,
    ProvinceComponent,
    PeriodComponent,
    SentenceComponent,
    TypeCaseComponent,
    DetailComponent,
    LawStoryComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NgZorroAntdModule
  ]
})
export class LawModule { }
