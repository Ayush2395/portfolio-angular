import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const routerAnimation = trigger('routerAnimation', [
    transition('* <=> *', [
        query(":enter", stagger(50, [
            style({ opacity: 0, transform: "translateY(-100px)" }),
            animate('1000ms 600ms ease', style({ opacity: 1, transform: "translateY(0)" }))
        ]), { optional: true })
    ]),
]);