import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawService } from '../law.service';
declare var echarts
@Component({
  selector: 'app-age-class',
  templateUrl: './age-class.component.html',
  styleUrls: ['./age-class.component.scss']
})
export class AgeClassComponent implements OnInit {

  classValueList = []; //类最
  penaltyValueList = [];//个罪
  selectPersonal:number;
  selectType:number = 0;
  selectPenalty:number;
  selectTitle:string;
  pageIndex = 1;
  total = 100;
  listOfData = [];
  constructor(private lawSerivce:LawService,
              private router:Router) { }

  ngOnInit() {
    this.getWenshuByClass();
    this.getClassList();
    this.getPenaltyList();
  }
  private getClassList(){
    this.lawSerivce.getPenaltyClass().subscribe(
      data => {
        data.penalty_class.forEach((element,index) => {
          this.classValueList.push({code:String(index+1),value:element})
        });
        this.selectTitle = this.classValueList[this.selectType].value;
        this.loadCateCharts();
      }
    )
  }
  private getPenaltyList(){
    this.lawSerivce.getPenaltyByClass('').subscribe(
      data =>{
        data.penalty_definite.forEach((element,index) => {
          this.penaltyValueList.push({code:String(index+1),value:element})
        });
      }
    )
  }

  private getWenshuByClass(){
    this.lawSerivce.getWenshuByClass('').subscribe(
      data =>{
        var list = [];
        data.wenshu_list.forEach(element => {
          list.push(element);
        });
        this.listOfData  = list;
        console.log("listOfData",this.listOfData);
      }
    )
  }

  searchPageIndexData(index:number){
      console.log("page",index);
  }


  //详情页面
  gotoDetail(item){
    this.router.navigate(
      ["/agecase/detail"],{
        skipLocationChange:true,
        queryParams:{
          "item":JSON.stringify(item),
          "from":"/agecase"
        }
      }
    )
  }
  searchSelectType(index:number,item){
    this.selectType = index;
    this.selectTitle = item.value
    this.loadCateCharts();
  }
  searchPenaltyType(index:number,item){
    console.log("page",index);
    this.selectPenalty = index;
}
  loadCateCharts(){
    this.lawSerivce.getTypeloadCateNumb().subscribe(
      data =>{
        data.forEach((element,index) => {
          if (!!element.penalty_class && element.penalty_class == this.selectTitle){
              this.loadDataForChart(element.penalty_prison_type_list);
           }
        });
      }
    )
  }

  private loadDataForChart(list){
    var yList = [];
    var xList = [];
    list.forEach(element => {
        xList.push(element.name);
        yList.push(element.number);
    });
    console.log("xList",xList,"yList",yList);
    var option = {
    tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    // formatter: '{b0}<br />{a0}: {c0}亿元<br />{a1}: {c1}%'
    },
    grid: {
    top: '10%',
    right: '3%',
    left: '15%',
    bottom: '15%'
    },
    xAxis: [{
    type: 'category',
    name: '',
    nameTextStyle: {
        color: "#333"
    },
    data: xList,
    axisLine: {
        lineStyle: {
        color: 'rgba(255,255,255,0.52)'
        }
    },
    axisLabel: {
        margin: 10,
        interval:0,
        color: '#000',
        textStyle: {
        fontSize: 11
        },
    },
    }],
    yAxis: [
    {
        type: 'value',
        name: '（个）',
        nameTextStyle: {
        color: "#333"
        },
        axisLabel: {
        formatter: '{value}',
        color: '#333',
        },
        axisLine: {
        show: true,
        lineStyle: {
            color: 'rgba(196,224,245,1)'
        }
        },
        splitLine: {
        show: true,
        lineStyle: {
            type: 'dashed',
            color: 'rgba(196,224,245,1)'
        }
        }
    }],
    series: [{
    type: 'bar',
    data: yList,
    name: '数量',
    barWidth: '16px',
    itemStyle: {
        normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#4DDEFE' // 0% 处的颜色
        }, {
            offset: 0.5,
            color: '#57FBFA' // 50% 处的颜色
        }, {
            offset: 1,
            color: '#3D8BFF' // 100% 处的颜色
        }], false),
        barBorderRadius: [2, 2, 0.1, 0.1],
        shadowColor: 'rgba(0,0,0,0)',
        shadowBlur: 4,
        label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            textStyle: { //数值样式
            color: '#111',
            fontSize: 14
            }
        },
        }
    },

    }]
};
    var mychart1 = echarts.init(document.getElementById("type-echart"));
    mychart1.clear();
    mychart1.setOption(option);
    mychart1.getZr().on('click', params => {
      let pointInPixel = [params.offsetX, params.offsetY]
      console.log("params",params);
      if (mychart1.containPixel('grid', pointInPixel)) {
        let xIndex = mychart1.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
        console.log("xIndex",xIndex)
      }
    })
    window.onresize = mychart1.resize();

   

}   

  searchPersonal(index:number,item){
    if (index == this.selectPersonal){
      this.selectPersonal = null;
    }else{
      this.selectPersonal = index;
    }
  }

}
