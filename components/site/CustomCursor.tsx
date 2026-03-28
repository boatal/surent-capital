"use client";

import { useEffect } from "react";

const interactiveSelector =
  "a,button,.triptych-card,.scenario-item,.instrument-item,.principle-row,.leadership-card,[data-cursor-hover]";

export function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = document.getElementById("cursor");
    if (!cursor) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleEnter = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(4)";
      cursor.style.background = "rgba(200,169,110,0.18)";
    };

    const handleLeave = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      cursor.style.background = "rgba(200,169,110,0.55)";
    };

    const interactiveElements = Array.from(
      document.querySelectorAll<HTMLElement>(interactiveSelector),
    );

    document.addEventListener("mousemove", handleMove);

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return <div id="cursor" aria-hidden="true" />;
}
