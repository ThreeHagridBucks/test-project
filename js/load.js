
// var animation_left = gsap.timeline();
// animation_left
//     .fromTo(".hero__left",
//         {
//             opacity: 0
//         },
//         {
//             opacity: 1,
//             duration: 2
//         },
//         0.1,
//     );


var animation_hero__title = gsap.timeline();
animation_hero__title.fromTo(".hero__title, .hero__btn", {
    duration: 0.5,
    y: 100,
    opacity: 0,
},
    {
        duration: 1.5,
        y: 0,
        opacity: 1,

    },
    0.1,
)
    .from(".hero__descr", {
        duration: 1.5,
        opacity: 0,
    },
        0.5,
    )

// var animation_hero__title = gsap.timeline();
// animation_hero__title.from(".hero__title, .hero__btn", {
//     duration: 1,
//     y: 100,
//     opacity: 0,
// })

// var animation_hero_descr = gsap.timeline();
// animation_hero_descr.from(".hero__descr", {
//     duration: 3,
//     opacity: 0,
// })

var animation_imgs = gsap.timeline();
animation_imgs
    .from(".jpg__big", {
        duration: 1.5,
        opacity: 0
    }, 0.5)
    .from(".jpg__small__first", {
        duration: 1.5,
        opacity: 0
    }, 0.6)
    .from(".jpg__small__second, .photos__author ", {
        duration: 1.5,
        opacity: 0
    }, 0.7)
