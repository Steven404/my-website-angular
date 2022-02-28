import { from } from "rxjs";
import {
    trigger,
    transition,
    style,
    query,
    group,
    animate
} from '@angular/animations';

export const animateComponents = 
[
    trigger('routeAnimation',[
        transition(':increment', slideTo('right')),
        transition(':decrement', slideTo('left')),
    ]),
    trigger('openingAnimation',[
        transition('* <=> *', fade())
    ])
]
;

function fade(){
    return [
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
            animate('600ms ease',
                style({ opacity: 1, transform: 'scale(1)'})
            )
        ], { optional: true })
    ]
}


function slideTo(direction){
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], {optional: true}),
        query(':enter', [
            style({ [direction]: '-100%'})
        ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ [direction]: '100%'}))
                ], {optional: true}),
                query(':enter', [
                    animate('600ms ease', style({ [direction]: '0%'}))
            ])
        ] )
    ];
}