import { from } from "rxjs";
import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations';

export const fader = 
trigger('routeAnimation',[
    transition('* <=> *',[
        query(':enter, :leave',[
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0)'
            })
        ], { optional: true }),
        query(':enter', [
            animate('1000ms ease',
                style({ opacity: 1, transform: 'scale(1)'})
            )
        ], { optional: true })
    ])
]);
