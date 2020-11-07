/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-08-21 11:31:10
 * @LastEditors: Seven
 * @LastEditTime: 2020-10-22 10:23:41
 */
import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective implements OnInit {

  constructor(public el: ElementRef) {
  }
  public isDown = false;
 
  public disX; // 记录鼠标点击事件的位置 X
 
  public disY; // 记录鼠标点击事件的位置 Y
 
 
  private totalOffsetX = 0; // 记录总偏移量 X轴
  private totalOffsetY = 0; // 记录总偏移量 Y轴
 
  // 点击事件
  @HostListener('mousedown', ['$event']) onMousedown(event:MouseEvent) {
    this.isDown = true;
    this.disX = event.pageX;
    this.disY = event.pageY;
    console.log("event.pageX",event.pageX,"event.pageY",event.pageY);
    console.log("event.clientX",event.clientX,"event.clientY",event.clientY);
  }
 
  // 监听document移动事件事件
  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    // 判断该元素是否被点击了。
    if (this.isDown) {
      console.log("event2.clientX",event.clientX,"event2.clientY",event.clientY);
      console.log("event2.pageX",event.pageX,"event2.clientY",event.pageY);
      this.el.nativeElement.style.left = this.totalOffsetX + event.pageX - this.disX + 'px';
      this.el.nativeElement.style.top = this.totalOffsetY + event.pageY - this.disY + 'px';
    }
  }
 
  // 监听document离开事件
  @HostListener('document:mouseup', ['$event']) onMouseup(event) {
    // 只用当元素移动过了，离开函数体才会触发。
    if (this.isDown) {
      console.log('fail');
      this.totalOffsetX += event.pageX - this.disX;
      this.totalOffsetY += event.pageY - this.disY;
      this.isDown = false;

      console.log("totalOffsetX",this.totalOffsetX,"totalOffsetY",this.totalOffsetY);
    }
  }
 
  ngOnInit() {
    this.el.nativeElement.style.position = 'relative';
  }


}
