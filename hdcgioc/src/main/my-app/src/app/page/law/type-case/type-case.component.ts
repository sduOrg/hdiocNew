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

  searchTagNames = [];
  classValueList = [];
  // tagTops =[ {key:"1",name:"类最名称"},{key:"2",name:"类最名称"}]
  selectPersonal:number;
  selectType:number = 0;
  selectTitle:string;
  pageIndex = 1;
  total = 100;
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor(private lawSerivce:LawService,
              private router:Router) { }

  ngOnInit() {
    this.getClassList();
  }
  private getClassList(){
    this.lawSerivce.getPenaltyClass().subscribe(
      data => {
        data.penalty_class.forEach((element,index) => {
          if(!!element && element != null){
            this.classValueList.push({code:String(index+1),value:element})
          }
        });
        this.selectTitle = this.classValueList[this.selectType].value;
        this.loadCateCharts();
      }
    )
  }
  searchData(index:number){
      console.log("page",index);
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
  searchSelectType(index:number,item){
    this.selectType = index;
    this.selectTitle = item.value
    this.loadCateCharts();
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
