/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 11:05:54
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-29 17:15:15
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LawService } from '../../law/law.service';
declare var echarts;
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private lawService:LawService) { }

  ngOnInit() {
    this.loadCateNumb();
    this.loadCategroyFault();
    this.loadAllage();
    this.loadAlledu();
    

  }
  private loadCateNumb(){
    this.lawService.getPieloadCateNumb().subscribe(
        data=>{
            var totals = 0;
            var names = [];
            var values = [];
            data.forEach(element => {
                 totals += Number(element.number);
                 values.push({
                    name:element.penalty_class,
                    value:Number(element.number)
                 })
             }); 
            values.sort(function(a, b){return b.value - a.value}); 
            values.forEach(element => {
                names.push(element.name);
            });  
            this.gettsbmOption(totals,names,values,2);
        }
    )
  }
  private loadCategroyFault(){
    this.lawService.getPieCategroyFault().subscribe(
        data=>{
            var totals = 0;
            var names = [];
            var values = [];
            data.forEach(element => {
                 totals += Number(element.number);
                 values.push({
                    name:element.name,
                    value:Number(element.number)
                 })
             }); 
            values.sort(function(a, b){return b.value - a.value}); 
            values.forEach(element => {
                names.push(element.name);
            });  
            this.gettsbmOption(totals,names,values,1);
        }
    )
  }
  private loadAlledu(){
      this.lawService.getPieAllEduData().subscribe(
          data =>{
            var totals = 0;
            var names = ["文盲","半文盲","小学","初中","高中","高职","中专","大专","本科","硕士","博士","其他"];
            var values = [];
            var i = 0;
            data["records"].forEach(element => {
                names.forEach(ele => {
                    if (ele == element.person_edu_level){
                      totals += Number(element.number);
                       values.push({
                            name:ele,
                            value:Number(element.number)
                        })
                    }
                });
             });  
             values.sort(function(a, b){return b.value - a.value}); 
             names = [];
            values.forEach(element => {
                names.push(element.name);
            });
            this.gettsbmOption(totals,names,values,4);
          }
      )
  }
  private loadAllage(){
     this.lawService.getPieAllAgeData().subscribe(
       data =>{
        var totals = 0;
        var names = ["不满14周岁","14-18周岁","18-30周岁","30-40周岁",
                    "40-50周岁","50-60周岁","60-70周岁","70-75周岁","超过75周岁"];
        var values = [];
        var i = 0;
        data.records.forEach(element => {
            for (var key in element){
               if (key != "unkonwn"){
                   totals += Number(element[key]);
                   values.push({
                         name:names[i],
                        value:Number(element[key])
                    })
                    i++;
               }
           }
         }); 
         values.sort(function(a, b){return b.value - a.value}); 
         names = [];
        values.forEach(element => {
            names.push(element.name);
        });
        this.gettsbmOption(totals,names,values,3);

       }
     )
  }

   gettsbmOption(totals,names,values,index) {
    // 总和
    var total = {
        value: totals,
        name: '案件数量'
    };
    var originalData = values;
    var myChartIndustryOption = echarts.init(document.getElementById('echart'+index));
    myChartIndustryOption.clear();
    var tsbmOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {d}%'
        },
        title: [{
            text: total.value,
            left: '20%',
            top: '40%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#000',
                fontWeight: 'normal',
                fontSize: 20
            }
        }, {
            text: total.name,
            left: '20%',
            top: '50%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#000',
                fontWeight: 'normal',
                fontSize: 14
            }
        }],
        color: ['#FFCB00', '#4988e6', '#c4e0f5', '#4be599', '#05c3fa','#6bcd09'],
        legend: {
            type: 'scroll',
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10,
            x: 'left',
            y: 'center',
            left: '50%',
            orient: 'vertical',
            data: names,
            textStyle: {
                color: ' #333',
                fontSize: 12
            },
            tooltip: {
                show: true,
            },
            formatter: function (name) {
                var oa = originalData;
                var num = totals;
                for (var i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                    //    if(name.length > 5)
                    //      name = name.substr(0, 9) + '..';
                        var number = 0;
                        if (Math.round((oa[i].value / num * 10000))/100 != 0){
                            number = Math.round((oa[i].value / num * 10000))/100
                        }else if (Math.round((oa[i].value / num * 100000))/1000 != 0){
                            number = Math.round((oa[i].value / num * 100000))/1000
                        }else if (Math.round((oa[i].value / num * 1000000))/10000 != 0){
                            number = Math.round((oa[i].value / num * 1000000))/10000 
                        }else if (Math.round((oa[i].value / num * 10000000))/100000 != 0){
                            number = Math.round((oa[i].value / num * 10000000))/100000
                        }
                       return name + ' ' +oa[i].value+ ' ' + number + '%';
                    }
                }
            }
        },
        series: [{
            hoverAnimation: false, //设置饼图默认的展开样式
            center: ["20%", "45%"],
            radius: [53, 65],
            name: 'pie',
            type: 'pie',
            // roseType: 'area',
            selectedMode: 'single',
            selectedOffset: 16, //选中是扇区偏移量
            clockwise: true,
            startAngle: 90,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    borderColor: '#000',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
            },
            data: originalData
        }]
    };
    myChartIndustryOption.setOption(tsbmOption);
    window.onresize = function () {
        myChartIndustryOption.resize();
    }
  }
}
