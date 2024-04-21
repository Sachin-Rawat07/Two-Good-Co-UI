function locomitiveScrollerTriggercode() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        //smoothMobile: true,//code added by me
        multiplier: 1,//code added by me
        class: "is-reveal",//code added by me
        breakpoint: 0,

        // smooth: true,
        // multiplier: 1,
        // class: "is-reveal",
        // mobile: {
        //     breakpoint: 0,
        //     smooth: true,
        //     multiplier: 15,
        //     class: "is-reveal",
        // },
        // tablet: {
        //     breakpoint: 0,
        //     smooth: true,
        //     multiplier: 1,
        //     class: "is-reveal",
        // },

    });


    //code added by me
    // const scroll = new LocomotiveScroll({ el: document.querySelector('[data-scroll]'), smooth: true, smoothMobile: true });
    //code added by me




    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    //------------------------------------------------------------------------------------------------------------









    //-------------------------------------------------------------------------------------------------------------


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomitiveScrollerTriggercode()


function hamberger() {
    var hamberger = document.querySelector(".nav-ham")
    var hamIcon = document.querySelector(".ri-menu-line")
    var hamParent = document.querySelector(".ham-parent")
    var navTopic = document.querySelectorAll(".part-3-ham a")
    var num = 1; // Initialize num as 1 (menu closed) 
    hamIcon.addEventListener("click", function () {
        if (num == 1) {
            // hamParent.style.display = "block"; // Display the menu
            var t2 = gsap.timeline()

            t2.to(hamIcon,
                {
                    opacity: 0.5
                })
            t2.call(function () {

                hamIcon.classList.remove("ri-menu-line");
                hamIcon.classList.add("ri-close-line");
            })
            t2.from(".ham-parent .part-3-ham a", {
                duration: 0.6,
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "50% 0% 50",
                ease: "back",
                stagger: 0.01

            });




            t2.from(".ham-parent .part-2-ham #ham-p-2 h3, .ham-parent .part-2-ham #ham-p-2 a", {
                duration: 0.6,
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "50% 0% 50",
                ease: "back",
                stagger: 0.01



            })
            t2.from(" .ham-parent .part-1-ham #ham-p-1 h3,.ham-parent  .part-1-ham #ham-p-1 a", {
                duration: 0.6,
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "50% 0% 50",
                ease: "back",
                stagger: 0.01



            })







            gsap.set(".ham-parent", { perspective: 400 }); // to give depth and 3d look
            gsap.to(".nav #part1 svg path", {
                fill: "#FFFFFF" // Assuming you want to remove the fill color
            });
            // gsap.to(".nav  .ham-parent .part-3-ham a svg path", {
            //     fill: "#FFFFFF" // Assuming you want to remove the fill color
            // });

            gsap.to(".nav #part2 #links a", {
                color: "#FFFFFF" // Assuming you want to change the text color to white
            });






            gsap.to(".ham-parent", {
                transform: 'translateY(0%)', // Slide in the menu from the top
                delay: 0.05,
                duration: 0.2,
                stagger: 0.3,
                ease: "expo.out"


            });


            //------------------------------------------------------------  ye svg code dekhna hai .. kya dikakt aa rhi 
            // var navTopics = document.querySelectorAll(".part-3-ham a");

            // navTopics.forEach(function(navTopic) {
            //     navTopic.addEventListener("mouseenter", function(){
            //         gsap.to(navTopic.querySelector(".ham-svg"), {
            //             autoAlpha : 1
            //         });
            //     });

            //     navTopic.addEventListener("mouseleave", function(){
            //         gsap.to(navTopic.querySelector(".ham-svg"), {
            //             autoAlpha : 0
            //         });
            //     });
            // });

            num = 0; // Update num to indicate that the menu is now open
        } else {
            var t2 = gsap.timeline()

            t2.to(hamIcon,
                {
                    opacity: 1
                })
            t2.call(function () {
                hamIcon.classList.add("ri-menu-line");
                hamIcon.classList.remove("ri-close-line");
            })
            gsap.to(" .ham-parent .part-1-ham #ham-p-1 h3,.ham-parent  .part-1-ham #ham-p-1 a", {
                opacity: 1,




            })

            gsap.to(".ham-parent .part-2-ham #ham-p-2 h3, .ham-parent .part-2-ham #ham-p-2 a", {
                opacity: 1,




            })
            gsap.to(".ham-parent .part-3-ham a", {

                opacity: 1,


            });

            gsap.to(".nav #part1 svg path", {
                fill: "currentColor"
            });

            gsap.to(".nav #part2 #links a", {
                color: "#000000"
            });



            gsap.to(".ham-parent", {
                transform: 'translateY(-100%)', // Slide out the menu to the top
                delay: 0.05,
                duration: 0.4,
                stagger: 0.3,
                ease: "expo.in"
            });
            num = 1; // Update num to indicate that the menu is now closed
        }
    });


}
hamberger()

function cart() {
    var cart = document.querySelector(".ham-cart")
    var cartIcon = document.querySelector(".ri-shopping-cart-2-line")
    var num = 1; // Initialize num as 1 (menu closed) 
    cartIcon.addEventListener("click", function () {
        if (num == 1) {
            // Display the menu
            var tl = gsap.timeline()
            tl.to(cartIcon, { opacity: 0.5 });
            // cartIcon.style.opacity = 0.5


            tl.call(function () {
                cartIcon.classList.add("ri-close-line")
                cartIcon.classList.remove("ri-shopping-cart-2-line")
            });


            gsap.to(".ham-cart", {
                transform: 'translateY(0%)', // Slide in the menu from the top
                delay: 0.15,
                duration: 0.6,
                stagger: 0.3,
                ease: "expo.out",
                // y: -500
            });
            tl.from(".ham-cart .ham-cart-up h3", {
                duration: 0.2,
                opacity: 0,
                y: 30,
                ease: "power5.out",


            }) ;

            tl.from(".ham-cart .ham-cart-up a", {
                duration: 0.3,
                opacity: 0,
                y: 30,
                ease: "power5.out",


            }) ;
 
            gsap.from(".ham-cart .ham-cart-down #ham-cart-down-1,.ham-cart .ham-cart-down #ham-cart-down-2", {
                duration: 0.9,
                opacity: 0,
                y: 30,
                stagger: 0.3,
                ease: "expo.out",


            }) ;
 


            gsap.set(".ham-cart", { perspective: 400 }); // to give depth and 3d look
            gsap.to(".nav #part1 svg path", {
                fill: "#FFFFFF" // Assuming you want to remove the fill color
            });
            // gsap.to(".nav  .ham-parent .part-3-ham a svg path", {
            //     fill: "#FFFFFF" // Assuming you want to remove the fill color
            // });

            gsap.to(".nav #part2 #links a", {
                color: "#FFFFFF" // Assuming you want to change the text color to white
            });

            // gsap.from(".ham-cart-down #ham-cart-down-1  ",{
            //     transform: 'translateX(-100%)',
            //     duration: 5,

            // },)

            num = 0; // Update num to indicate that the menu is now open
        } else {

            // Create a GSAP timeline
            var tl = gsap.timeline(

            );

            // Animate the opacity of cartIcon to 1
            tl.to(cartIcon, {
                opacity: 1,

            });

            // Remove "ri-close-line" class and add "ri-shopping-cart-2-line" class
            tl.call(function () {
                cartIcon.classList.remove("ri-close-line");
                cartIcon.classList.add("ri-shopping-cart-2-line");
            });

            gsap.to(".ham-cart", {
                transform: 'translateY(-100%)', // Slide out the menu to the top
                delay: 0.15,
                duration: 0.6,
                stagger: 0.3,
                ease: "expo.in",
            })



            gsap.to(".nav #part1 svg path", {
                fill: "currentColor"
            });

            gsap.to(".nav #part2 #links a", {
                color: "#000000"
            });










            num = 1; // Update num to indicate that the menu is now closed
        }
    });
}
cart()

function Productanimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".shop-cursor", {
            left: dets.x,
            top: dets.y
        });
    });

    var child1 = document.querySelector("#s-child1");
    var child2 = document.querySelector("#s-child2");
    // var child3 = document.querySelector("#child3");
    // var child4 = document.querySelector("#child4");

    function isMobile() {
        return window.innerWidth < 768; // Adjust the breakpoint as needed
    }

    if (!isMobile()) {
        // Desktop ehavior
        console.log("windows")
        child1.addEventListener("mouseenter", function () {

            gsap.to(".shop-cursor", {
                backgroundColor: "rgb(25, 32, 70,.5)",
                transform: 'translate(-50%,-50%) scale(1)',
                opacity: 1

            })
        })


        child1.addEventListener("mouseleave", function () {

            gsap.to(".shop-cursor", {
                transform: 'translate(-50%,-50%) scale(0)',
                opacity: 0

            })
        })
        child2.addEventListener("mouseenter", function () {

            gsap.to(".shop-cursor", {
                backgroundColor: "rgb(210, 200, 45,.3)",
                transform: 'translate(-50%,-50%) scale(1)',
                opacity: 1

            })
        })


        child2.addEventListener("mouseleave", function () {

            gsap.to(".shop-cursor", {
                transform: 'translate(-50%,-50%) scale(0)',
                opacity: 0

            })
        })
        // child3.addEventListener("mouseenter", function () {

        //     gsap.to(".cursor", {
        //         backgroundColor: "rgb(17, 129, 55,.5)",
        //         transform: 'translate(-50%,-50%) scale(1)',
        //         opacity: 1

        //     })
        // })


        // child3.addEventListener("mouseleave", function () {

        //     gsap.to(".cursor", {
        //         transform: 'translate(-50%,-50%) scale(0)',
        //         opacity: 0

        //     })
        // })
        // child4.addEventListener("mouseenter", function () {

        //     gsap.to(".cursor", {
        //         backgroundColor: "rgb(36, 122, 241,.5)",
        //         transform: 'translate(-50%,-50%) scale(1)',
        //         opacity: 1

        //     })
        // })
        // child4.addEventListener("mouseleave", function () {

        //     gsap.to(".cursor", {
        //         transform: 'translate(-50%,-50%) scale(0)',
        //         opacity: 0

        //     })
        // })

    } else {
        // Mobile behavior
        // You can choose to disable the cursor animation or provide a different mobile-friendly behavior
        console.log("phone");

        document.querySelectorAll(".cursor").forEach(function (cursor) {
            cursor.style.display = "none";
        });
    }

}

// Call the function to initialize the animation
Productanimation();






function emailFill(){
    var email = document.querySelector(".email");
    var label = document.querySelector("label");
    var icon = document.querySelector(".ri-arrow-right-line");
    var x = 1;
    
    email.addEventListener("click", function () {
    
        event.stopPropagation();
    
        if (x === 1) {
            label.style.opacity = 0;
            icon.classList.remove("ri-arrow-right-line");
            icon.classList.add("ri-corner-down-left-line");
            console.log("Email clicked - Hide label and change icon");
            x = 0;
        } else {
    
    
            document.addEventListener("click", function () {
                if (x === 0) {
                    label.style.opacity = 1;
                    icon.classList.add("ri-arrow-right-line");
                    icon.classList.remove("ri-corner-down-left-line");
                    console.log("Clicked outside - Show label and change icon");
                    x = 1;
                }
            });
        }
    });
    
}
emailFill()