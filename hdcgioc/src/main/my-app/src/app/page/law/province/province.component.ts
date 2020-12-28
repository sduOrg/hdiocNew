import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawService } from '../law.service';
declare var echarts;
@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  classValueList = []; //类最
  penaltyValueList = []; //个罪

  selectTypeIndex: number = 0; //类最选择
  selectTitle: string;

  selectPenaltyIndex: number = null; //个罪选择
  selectPenaltyTitle: string;

  addressType:string;
  residentType:string;

  selectAddressIndex:number = 0;

  pageIndex = 1;
  total = 100;
  listOfData = [];
  echartsXlist = [];
  addressValueList = ["籍贯","居住地"];
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
      .getWenshuProvince(
        this.selectTitle,
        this.selectPenaltyTitle,
        this.addressType,
        this.residentType,
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
  //点击切换居住地
  searchAddressType(index,item){
    this.selectAddressIndex = index;
    // if (index == 0){
    //   this.
    // }else{

    // }
    this.addressType = null;
    this.residentType = null;
    this.loadCateCharts();
  }
   //点击的类最
   searchSelectType(index: number, item) {
    this.selectTypeIndex = index;
    this.selectTitle = item.value;

    //类最切换 条件情况
    this.selectPenaltyIndex = null;
    this.selectPenaltyTitle = null;
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
      // this.eduType = null;
      this.addressType = null;
      this.residentType = null;
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
    if (this.selectAddressIndex == 0){
      this.addressType = nums;
      this.residentType = null;
    }else{
      this.residentType = nums;
      this.addressType = null;
    }
    this.getWenshuByType();
  }
  //详情页面
  gotoDetail(item){
    this.router.navigate(
      ["/province/detail"],{
        skipLocationChange:true,
        queryParams:{
          "item":JSON.stringify(item),
          "from":"/province"
        }
      }
    )
  }
  loadCateCharts(){
    if (this.selectAddressIndex == 0){
      this.lawSerivce.getPenaltyAddress().subscribe(
        data =>{
          data.forEach((element,index) => {
            if (!!element.penalty_class && element.penalty_class == this.selectTitle){
                this.loadDataForChart(element.province_address);
             }
          });
        }
      )
    }else{
      this.lawSerivce.getPenaltyResidence().subscribe(
        data =>{
          data.forEach((element,index) => {
            if (!!element.penalty_class && element.penalty_class == this.selectTitle){
                this.loadDataForChart(element.province_residence);
             }
          });
        }
      )
    }

  }

  private loadDataForChart(list){
    var xList = []
    var yList = []
    list.forEach(element => {
        if (!!element.name){
          xList.push(element.name);
          yList.push(element.number);
        }
    });
    this.echartsXlist = xList;
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
    left: '8%',
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
            fontSize: 12
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
