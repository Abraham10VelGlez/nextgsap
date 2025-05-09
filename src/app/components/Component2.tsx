"use client"
import { useEffect, useRef } from 'react'
import '../css/controls.css'
import gsap from 'gsap'
export function Component2() {
    //hacemos referencia al div con clase flair
    const flair = useRef<HTMLDivElement | null>(null);
    //hacemos referencia al div con clase nav light
    const nav = useRef<HTMLDivElement | null>(null);
    const tween = useRef<gsap.core.Tween | null>(null)

    useEffect(() => {
        if (nav.current && flair.current) {
            tween.current = gsap.to(flair.current, {
                duration: 2,
                x: nav.current.offsetWidth, // animate by the px width of the nav
                xPercent: -100, // offset by the width of the box
                rotation: 360,
                ease: "none",
                paused: true
            });
            //tween.play();
        }
    }, [])

    const Play = () => { tween.current?.play() };
    const Pause = () => { tween.current?.pause() };
    const Resumen = () => { tween.current?.resume() };
    const REverse = () => { tween.current?.reverse() };
    const REstar = () => { tween.current?.restart() };
    // Control methods
    return <>
        <p>CONTROLS GSAP</p>
        <div className="container">
            <div className="flair flair--25" ref={flair}></div>
            <div className="nav light" ref={nav}></div>
        </div>
        <button id="play" onClick={Play}>play()</button>
        <button id="pause" onClick={Pause}>pause()</button>
        <button id="resume" onClick={Resumen} >resume()</button>
        <button id="reverse" onClick={REverse}>reverse()</button>
        <button id="restart" onClick={REstar}>restart()</button>

    </>
}

