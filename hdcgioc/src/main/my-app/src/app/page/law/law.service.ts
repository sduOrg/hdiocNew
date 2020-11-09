import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LawModule } from './law.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LawService {

  constructor(private http:HttpClient) {
   }
  getPieAllAgeData(){
     return this.http.get("assets/data/all_age.json").pipe(map((res:{"records":[{}]}) =>res))
   }
   getPieAllEduData(){
    return this.http.get("assets/data/all_edu.json").pipe(map((res) =>res))
  }
  getPieCategroyFault(){
    return this.http.get("assets/data/penalty_prison_type_num_0917.json").pipe(map((res:[any]) =>res))
  }
  getPieloadCateNumb(){
    return this.http.get("assets/data/penalty_class_num.json").pipe(map((res:[any]) =>res))
  }


  //类最 及其判决数量
  getTypeloadCateNumb(){
    return this.http.get("assets/data/penalty_prison_type_num_0913.json").pipe(map((res:[any]) =>res))
  }
}
