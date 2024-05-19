import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation = trigger('fade-in', [
    transition(":enter", [
        query(".fade-in", stagger(50, [
            style({ opacity: 0, transform: "translateY(-100px)" }),
            animate('1000ms 600ms ease', style({ opacity: 1, transform: "translateY(0)" }))
        ]))
    ])
]);