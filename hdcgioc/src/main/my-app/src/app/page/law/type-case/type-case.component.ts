import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawService } from '../law.service';
declare var echarts
@Component({
  selector: 'app-type-case',
  templateUrl: './type-case.component.html',
  styleUrls: ['./type-case.component.scss']
})


export class TypeCaseComponent implements OnInit {

  classValueList = []; //类最
  penaltyValueList = []; //个罪

  selectTypeIndex: number = 0; //类最选择
  selectTitle: string;

  selectPenaltyIndex: number = null; //个罪选择
  selectPenaltyTitle: string;

  eduType:string;

  pageIndex = 1;
  total = 100;
  listOfData = [];
  echartsXlist = [];
  constructor(private lawSerivce: LawService, private router: Router) {}

  ngOnInit() {
    this.getClassList();
  }
  private getClassList() {
    this.lawSerivce.getPenaltyClass().subscribe((data) => {
      data.penalty_class.forEach((element, index) => {
        if (element != "null" && element != null) {
          this.classValueList.push({ code: String(index + 1), value: element });
        }
      });
      this.selectTitle = this.classValueList[this.selectTypeIndex].value;
      this.loadCateCharts();
      // this.getPenaltyList(this.selectTitle);
      this.getWenshuByType();
    });
  }
  private getWenshuByType() {
    this.lawSerivce
      .getWenshuByEduOrType(
        this.selectTitle,
        this.selectPenaltyTitle,
        this.eduType,
        '',
        String(this.pageIndex)
      )
      .subscribe((data) => {
        this.total = data.count;
        var list = [];
        data.wenshu_list.forEach((element) => {
          list.push(element);
        });
        this.listOfData = list;
        console.log("listOfData", this.listOfData);
      });
  }

  //点击的类最
  searchSelectType(index: number, item) {
    this.selectTypeIndex = index;
    this.selectTitle = item.value;

    //类最切换 条件情况
    this.selectPenaltyIndex = null;
    this.selectPenaltyTitle = null;
    this.eduType = null;

    this.loadCateCharts();
    //点击类最加载个罪
    debugger;
    this.getWenshuByType();
  }

  //删除选择条件
  deleteFlagType(index: number, item: string) {
    if (index == 1) {
      this.selectPenaltyIndex = null;
      this.selectPenaltyTitle = null;
    } else if (index == 2) {
      this.eduType = null;
    }
    this.loadCateCharts();
    this.getWenshuByType();
  }

  //控制翻页
  searchPageIndexData(index: number) {
    console.log("page", index);
    this.pageIndex = index;
    this.getWenshuByType();
  }

  private echartsClick(index: number) {
    console.log("index", index);
    let nums: string = this.echartsXlist[index];
    this.eduType = nums;
    this.getWenshuByType();
  }
  //详情页面
  gotoDetail(item){
    this.router.navigate(
      ["/type/detail"],{
        skipLocationChange:true,
        queryParams:{
          "item":JSON.stringify(item),
          "from":"/type"
        }
      }
    )
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
    // for (var key in element){
    //     if (key != "unkown" && key != "penalty_class"){
    //         yList.push(element[key]);
    //     }
    // }
    list.forEach(element => {
        xList.push(element.name);
        yList.push(element.number);
    });
    console.log("xList",xList,"yList",yList);
    this.echartsXlist = xList;
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
        this.echartsClick(xIndex);
      }
    })
    window.onresize = mychart1.resize();



}
}
