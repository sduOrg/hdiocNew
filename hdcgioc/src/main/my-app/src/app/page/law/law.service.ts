import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LawModule } from './law.module';
import { map } from 'rxjs/operators';

declare var config;
@Injectable({
  providedIn: 'root'
})
export class LawService {

  private url = config;
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


  //类最 刑法种类
  getTypeloadCateNumb(){
    return this.http.get("assets/data/penalty_prison_type_num_0913.json").pipe(map((res:[any]) =>res))
  }

  //类最 刑期分布
  getPenaltyLengthClass(){
    return this.http.get("assets/data/penalty_length_class_divide.json").pipe(map((res) =>res))
  }

  //类最文化程度分布
  getPenaltyEduClass(){
    return this.http.get("assets/data/penalty_edu_num_0913.json").pipe(map((res:[any]) =>res))
  }
  //个罪文化程度分布
  getPenaltyEduList(){
    return this.http.get("assets/data/penalty_definite_edu_num_0913.json").pipe(map((res:[any]) =>res))
  }
  //类最年龄分布
  getPenaltyAgeClass(){
    return this.http.get("assets/data/penalty_age_num_0913.json").pipe(map((res:[any]) =>res))
  }
  //个罪年龄分布
  getPenaltyAgeList(){
    return this.http.get("assets/data/penalty_class_definite_age_num_0913.json").pipe(map((res:[any]) =>res))
  }

  //类最发生省份分布
  getPenaltyAddress(){
    return this.http.get("assets/data/penalty_province_address.json").pipe(map((res:[any]) =>res))
  }

  //类最居住地省份分布
  getPenaltyResidence(){
    return this.http.get("assets/data/penalty_province_residence.json").pipe(map((res:[any]) =>res))
  }

   //类最羁押周期
   getTypePeriodLength(){
    return this.http.get("assets/data/decision_inter_month_divide.json").pipe(map((res:[any]) =>res))
  }

  //获取类最列表
  getPenaltyClass(){
    debugger;
    return this.http.get(this.url+"get_penalty_class").pipe(map((res:{"penalty_class":[string]})=>res))
  }


  getLawsStory(){
    return this.http.get(this.url+"get_laws").pipe(map((res:{"laws":[string]})=>res.laws))
  }
  getNoPenaltyKeyword(){
    return this.http.get(this.url+"getNoPenaltyKeyword").pipe(map((res:{"keyword":[string]})=>res.keyword))
  }

  getNoPenaltyLaws(){
    return this.http.get(this.url+"getNoPenaltyLaws").pipe(map((res:{"laws":[string]})=>res.laws))
  }

  getWenshuByStory(penalty_class:string,penalty_definite?:string,laws?:string,page_no?:string){
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options= {headers: headers};
    let params= new URLSearchParams();
    params.append("penalty_class",penalty_class);
    if (penalty_definite)params.append("penalty_definite",penalty_definite);
    if (laws)params.append("laws",laws);
    if (page_no)params.append("page_no",page_no);
    let body=params.toString();
    return this.http.post(this.url+"get_wenshu_laws",body, options).pipe(map((res:{"wenshu_list":[any],"count":number})=>res));
    // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }

  // getPenaltyClass(){

  //   return this.http.get("assets/data/service/get_penalty_class.json").pipe(map((res:{"penalty_class":[string]})=>res))
  // }

  //获取类最对应的个罪
  getPenaltyByClass(penalty_class:string){
    // return this.http.get("assets/data/service/get_penalty_byClass.json").pipe(map((res:{"penalty_definite":[string]})=>res))
    const param = new HttpParams().set("penalty_class",penalty_class);
    return this.http.get(this.url+"get_penalty_byClass",{params:param}).pipe(map((res:{"penalty_definite":[string]})=>res));
  }
  //获取年龄对应的文书列表
  getWenshuByAge(penalty_class:string,penalty_definite?:string,age_start?:string,age_end?:string,page_no?:string){
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options= {headers: headers};
    let params= new URLSearchParams();
    params.append("penalty_class",penalty_class);
    if (penalty_definite)params.append("penalty_definite",penalty_definite);
    if (age_start)params.append("age_start",age_start);
    if (age_end)params.append("age_end",age_end);
    if (page_no)params.append("page_no",page_no);
    let body=params.toString();
    return this.http.post(this.url+"get_wenshu_age",body, options).pipe(map((res:{"wenshu_list":[any],"count":number})=>res));
    // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }
  //根据教育程度获取文书列表
  getWenshuByEduOrType(penalty_class:string,penalty_definite?:string,prison_type?:string,edu_level?:string,page_no?:string){
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options= {headers: headers};
    let params= new URLSearchParams();
    params.append("penalty_class",penalty_class);
    if (penalty_definite)params.append("penalty_definite",penalty_definite);
    if (prison_type)params.append("prison_type",prison_type);
    if (edu_level)params.append("edu_level",edu_level);
    if (page_no)params.append("page_no",page_no);
    let body=params.toString();
    return this.http.post(this.url+"get_wenshu_prisonTypeEdu",body, options).pipe(map((res:{"wenshu_list":[any],"count":number})=>res));
    // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }

  //刑期长度

  getWenshuPrisonLength(penalty_class:string,penalty_definite?:string,length_start?:string,length_end?:string,page_no?:string){
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options= {headers: headers};
    let params= new URLSearchParams();
    params.append("penalty_class",penalty_class);
    if (penalty_definite)params.append("penalty_definite",penalty_definite);
    if (length_start)params.append("length_start",length_start);
    if (length_end)params.append("length_end",length_end);
    if (page_no)params.append("page_no",page_no);
    let body=params.toString();
    return this.http.post(this.url+"get_wenshuPrisonLength",body, options).pipe(map((res:{"wenshu_list":[any],"count":number})=>res));
    // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }


  getWenshuProvince(penalty_class:string,penalty_definite?:string,province_address?:string,province_residence?:string,page_no?:string){
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options= {headers: headers};
    let params= new URLSearchParams();
    params.append("penalty_class",penalty_class);
    if (penalty_definite)params.append("penalty_definite",penalty_definite);
    if (province_address)params.append("province_address",province_address);
    if (province_residence)params.append("province_residence",province_residence);
    if (page_no)params.append("page_no",page_no);
    let body=params.toString();
    return this.http.post(this.url+"get_wenshu_province",body, options).pipe(map((res:{"wenshu_list":[any],"count":number})=>res));
    // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }
  //羁押周期文书

  getWenshuInterMonth(penalty_class:string,penalty_definite?:string,start?:string,end?:string,page_no?:string){
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options= {headers: headers};
    let params= new URLSearchParams();
    params.append("penalty_class",penalty_class);
    if (penalty_definite)params.append("penalty_definite",penalty_definite);
    if (start)params.append("start",start);
    if (end)params.append("end",end);
    if (page_no)params.append("page_no",page_no);
    let body=params.toString();
    return this.http.post(this.url+"get_wenshuInterMonth",body, options).pipe(map((res:{"wenshu_list":[any],"count":number})=>res));
    // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }

  //获取类最对应的文书列表
  getWenshuByClass(className:string){
    return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }

  //羁押周期文书

  getNoPenaltyWenshu(keyword:string,law?:string,page_no?:string){
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options= {headers: headers};
    let params= new URLSearchParams();
    if (keyword)params.append("keyword",keyword);
    if (law)params.append("law",law);
    if (page_no)params.append("page_no",page_no);
    let body=params.toString();
    return this.http.post(this.url+"getNoPenaltyWenshu",body, options).pipe(map((res:{"wenshu_list":[any],"count":number})=>res));
    // return this.http.get("assets/data/service/get_wenshuBy_class.json").pipe(map((res:{"wenshu_list":[any]})=>res))
  }
}
