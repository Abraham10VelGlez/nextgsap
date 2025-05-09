"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import '../css/simplebox.css'
export function Component1() {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        //efecto de fade para ocultar el box
        gsap.registerEffect({
            name: "fade",
            defaults: { duration: 2 },
            effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
                return gsap.to(targets, { duration: config.duration, opacity: 0 });
            },
        });

        //efecto de fadeIn para ver el box
        gsap.registerEffect({
            name: "fadeIn",
            defaults: { duration: 2 },
            effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
                return gsap.to(targets, { duration: config.duration, opacity: 1 });
            },
        });


        // Agregar eventos una vez montado el DOM
        if (containerRef.current) {
            const boxes = containerRef.current.querySelectorAll(".box");

            boxes.forEach((box) => {
                box.addEventListener("mouseenter", () => {
                    //invocacion al efecto de fade 
                    gsap.effects.fade(box);

                    setTimeout(() => {
                        //invocacion al efecto de fadeIn 
                        gsap.effects.fadeIn(box)
                    }, 5000);

                });
            });
        }
    }, []);
    const colors = ["box1", "box2", "box3", "box4"];
    const repeat = 30;


    return <>
        <div id="demo" ref={containerRef}>
            <h2>GSAP Effects Simple Demo</h2>
            {[...Array(repeat)].flatMap(() =>
                colors.map((color, index) => (
                    <div key={`${color}-${index}-${Math.random()}`} className={`box ${color}`}></div>
                ))
            )}
        </div>
    </>
}

