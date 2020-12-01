import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { LawService } from '../law.service';
// declare var echarts

@Component({
  selector: 'app-law-story',
  templateUrl: './law-story.component.html',
  styleUrls: ['./law-story.component.scss']
})
export class LawStoryComponent implements OnInit {

  classValueList = []; //类最
  penaltyValueList = [];//个罪
  lawStoryList = [];//法定情节

  selectTypeIndex:number = 0;//类最选择
  selectTitle:string;

  selectPenaltyIndex:number = null;//个罪选择
  selectPenaltyTitle:string;

  selectLawStoryIndex:number = null;//法定情节选择
  selectPLawStoryTitle:string;


  selectTagList = [];

  // start_age:string;
  // end_age:string;
  // age_rang:string;

  pageIndex = 1;
  total = 100;
  listOfData = [];
  echartsXlist = [];
  constructor(private lawSerivce:LawService,
              private router:Router) { }

  ngOnInit() {
    this.getClassList();
  }
  private getClassList(){
    this.lawSerivce.getPenaltyClass().subscribe(
      data => {
        data.penalty_class.forEach((element,index) => {
          if (element != "null" && element != null){
            this.classValueList.push({code:String(index+1),value:element})
          }
        });
        this.selectTitle = this.classValueList[this.selectTypeIndex].value;
        this.loadCateCharts();
        this.getPenaltyList(this.selectTitle);
        this.getLawStroyList();
        this.getWenshuByLawStory();
      }
    )
  }
  private getPenaltyList(classname:string){
    this.penaltyValueList = [];
    this.lawSerivce.getPenaltyByClass(classname).subscribe(
      data =>{
        data.penalty_definite.forEach((element,index) => {
          this.penaltyValueList.push({code:String(index+1),value:element})
        });
      }
    )
  }
  getLawStroyList(){
    this.lawSerivce.getLawsStory().subscribe(
      data =>{
        data.forEach(
          element =>{
            if (element != null){
              this.lawStoryList.push(element);
            }
          }
        )
      }
    )
  }
  private getWenshuByLawStory(){
    this.lawSerivce.getWenshuByStory(this.selectTitle,this.selectPenaltyTitle,this.selectPLawStoryTitle,String(this.pageIndex)).subscribe(
      data =>{
        this.total = data.count;
        var list = [];
        data.wenshu_list.forEach(element => {
          list.push(element);
        });
        this.listOfData  = list;
        console.log("listOfData",this.listOfData);
      }
    )
  }


  //点击的类最
  searchSelectType(index:number,item){
    this.selectTypeIndex = index;
    this.selectTitle = item.value

    //类最切换 条件情况
    this.selectPenaltyIndex = null;
    this.selectPenaltyTitle = null;

    this.selectLawStoryIndex = null;
    this.selectPLawStoryTitle = null;
    // this.loadCateCharts();
    //点击类最加载个罪
    this.getPenaltyList(this.selectTitle);
    this.getWenshuByLawStory();
  }
  //点击个罪
  searchPenaltyType(index:number,item){
    console.log("page",index);
    if (this.selectPenaltyIndex == index){
      this.selectPenaltyIndex = null;
      this.selectPenaltyTitle = null;
    }else{
      this.selectPenaltyIndex = index;
      this.selectPenaltyTitle = item.value
    }
    // this.loadCateCharts();
    this.getWenshuByLawStory();

}
  //点击法定情节
  searchLawStory(index,item){
    if (this.selectLawStoryIndex == index){
      this.selectLawStoryIndex = null;
      this.selectPLawStoryTitle = null;
    }else{
      this.selectLawStoryIndex = index;
      this.selectPLawStoryTitle = item
    }
    // this.loadCateCharts();
    this.getWenshuByLawStory();
  }
  //删除选择条件
  deleteFlagType(index:number,item:string){
    if (index == 1){
      this.selectPenaltyIndex = null;
      this.selectPenaltyTitle = null;
    }else if (index == 2){
      this.selectLawStoryIndex = null;
      this.selectPLawStoryTitle = null;
    }
    this.loadCateCharts();
    this.getWenshuByLawStory();
  }
  //加载柱状图
  loadCateCharts(){
    debugger;
    if (this.selectPenaltyIndex != null){ //判断是否点击了个罪
      this.lawSerivce.getPenaltyAgeList().subscribe(
        data =>{
          data.forEach(element => {
            if (element.penalty_class == this.selectTitle){
                // for (var key in element.age_num){
                //     if (key != "unkown"){
                //         yList.push(element.age_num[key]);
                //     }
                // }
                element.penalty_definite_age.forEach(ele => {
                    if (ele.penalty_name_definite == this.selectPenaltyTitle){
                      this.loadDataForChart(ele)
                    }
                });
            }
         });
        }
      )
    }else{
      this.lawSerivce.getPenaltyAgeClass().subscribe(
        data =>{
          data.forEach((element,index) => {
            if (!!element.penalty_class && element.penalty_class == this.selectTitle){
              this.loadDataForChart(element.age_num);
             }
          });
        }
      )
    }

  }

  //控制翻页
  searchPageIndexData(index:number){
    console.log("page",index);
    this.pageIndex = index;
    this.getWenshuByLawStory();
}
  //详情页面
  gotoDetail(item){
    this.router.navigate(
      ["/story/detail"],{
        skipLocationChange:true,
        queryParams:{
          "item":JSON.stringify(item),
          "from":"/story"
        }
      }
    )
  }
  // private echartsClick(index:number){
  //   console.log("index",index);
  //   let nums:string = this.echartsXlist[index];
  //   this.age_rang = nums;
  //   var age_start = "0";
  //   var age_end = "120"
  //   if (nums.indexOf("-") != -1){
  //    const arr =  nums.split("-");
  //    age_start = arr[0];
  //    age_end = arr[1];
  //   }else{
  //     if (index == 0){
  //       age_end = nums;
  //     }else{
  //       age_start = nums;
  //     }
  //   }
  //   this.start_age = age_start;
  //   this.end_age = age_end;
  //   this.getWenshuByAge();
  //   console.log("age_start",age_start,"age_end",age_end);
  // }
  private loadDataForChart(map){
//     var yList = [];
//     var xList = ["<14","14-18","18-30","30-40","40-50","50-60","60-70","70-75",">75"]
//            for (var key in map){
//                if (key != "unkown" && key != "unkonwn" && key != "penalty_name_definite"){
//                    yList.push(map[key]);
//                }
//     }
//     this.echartsXlist  = ["14","14-18","18-30","30-40","40-50","50-60","60-70","70-75","75"];
//     console.log("xList",xList,"yList",yList);
//     var option = {
//     tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//         type: 'shadow'
//     },
//     // formatter: '{b0}<br />{a0}: {c0}亿元<br />{a1}: {c1}%'
//     },
//     grid: {
//     top: '10%',
//     right: '3%',
//     left: '15%',
//     bottom: '15%'
//     },
//     xAxis: [{
//     type: 'category',
//     name: '',
//     nameTextStyle: {
//         color: "#333"
//     },
//     data: xList,
//     axisLine: {
//         lineStyle: {
//         color: 'rgba(255,255,255,0.52)'
//         }
//     },
//     axisLabel: {
//         margin: 10,
//         interval:0,
//         color: '#000',
//         textStyle: {
//         fontSize: 11
//         },
//     },
//     }],
//     yAxis: [
//     {
//         type: 'value',
//         name: '（个）',
//         nameTextStyle: {
//         color: "#333"
//         },
//         axisLabel: {
//         formatter: '{value}',
//         color: '#333',
//         },
//         axisLine: {
//         show: true,
//         lineStyle: {
//             color: 'rgba(196,224,245,1)'
//         }
//         },
//         splitLine: {
//         show: true,
//         lineStyle: {
//             type: 'dashed',
//             color: 'rgba(196,224,245,1)'
//         }
//         }
//     }],
//     series: [{
//     type: 'bar',
//     data: yList,
//     name: '数量',
//     barWidth: '16px',
//     itemStyle: {
//         normal: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//             offset: 0,
//             color: '#4DDEFE' // 0% 处的颜色
//         }, {
//             offset: 0.5,
//             color: '#57FBFA' // 50% 处的颜色
//         }, {
//             offset: 1,
//             color: '#3D8BFF' // 100% 处的颜色
//         }], false),
//         barBorderRadius: [2, 2, 0.1, 0.1],
//         shadowColor: 'rgba(0,0,0,0)',
//         shadowBlur: 4,
//         label: {
//             show: true, //开启显示
//             position: 'top', //在上方显示
//             textStyle: { //数值样式
//             color: '#111',
//             fontSize: 14
//             }
//         },
//         }
//     },

//     }]
// };
//     var mychart1 = echarts.init(document.getElementById("type-echart"));
//     mychart1.clear();
//     mychart1.setOption(option);
//     mychart1.getZr().on('click', params => {
//       let pointInPixel = [params.offsetX, params.offsetY]
//       console.log("params",params);
//       if (mychart1.containPixel('grid', pointInPixel)) {
//         let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
//         console.log("xIndex",xIndex)
//         this.echartsClick(xIndex);
//       }
//     })
//     window.onresize = mychart1.resize();



}

}
