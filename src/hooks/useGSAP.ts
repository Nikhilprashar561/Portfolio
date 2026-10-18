"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsapConfig";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useGSAP(
  callback: (context: gsap.Context) => void,
  dependencies: React.DependencyList = [],
  scopeRef?: React.RefObject<HTMLElement | null>
) {
  const savedCallback = useRef(callback);
  savedCallback.current = callback;

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const scope = scopeRef ? scopeRef.current ?? undefined : undefined;
    const ctx = gsap.context((self) => {
      savedCallback.current(self);
    }, scope);

    return () => {
      ctx.revert();
    };
  }, dependencies);
}

export default useGSAP;
