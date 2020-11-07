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

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  let b = "hahha"
  let obj1 = { a: 1, b: 2};
  let obj2 = { ...obj1, b};
  console.log(obj1); // {a: 1, b: 2}
  console.log(obj2);

    const locations = new Observable((observer) => {
      let watchId: number;
    
      // Simple geolocation API check provides values to publish
      console.log("navigator",navigator);
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: Position) => {
          observer.next(position);
        }, (error: PositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }
    
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });
    
    // Call subscribe() to start listening for updates.
    const locationsSubscription = locations.subscribe({
      next(position) {
        debugger;
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
    
    // Stop listening for location after 10 seconds
    // setTimeout(() => {
    //   locationsSubscription.unsubscribe();
    // }, 10000)
  }
 
}
