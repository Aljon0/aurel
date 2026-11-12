"use client";

import { useRef, type ReactNode } from "react";
import { usePageMotion } from "@/hooks/usePageMotion";

interface PageMotionProps {
  children: ReactNode;
}

/**
 * Client boundary that renders <main> and animates the server-rendered
 * sections inside it via data attributes. Sections stay server components.
 */
export function PageMotion({ children }: PageMotionProps) {
  const ref = useRef<HTMLElement>(null);
  usePageMotion(ref);

  return <main id="main" ref={ref}>{children}</main>;
}