/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 11:17:03
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-01 23:45:38
 * @Description: 路由动画
 */
import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    // transition('* <=> about', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%'})
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%'}))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%'}))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '-100%'}))
        ]),
        query(':enter', [
          animate('200ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);