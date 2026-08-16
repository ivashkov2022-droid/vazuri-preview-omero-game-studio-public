import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        class?: string;
        src?: string;
        alt?: string;
        loading?: "auto" | "lazy" | "eager";
        "camera-controls"?: string;
        "auto-rotate"?: string;
        "auto-rotate-delay"?: string;
        "rotation-per-second"?: string;
        "camera-orbit"?: string;
        "field-of-view"?: string;
        "min-camera-orbit"?: string;
        "max-camera-orbit"?: string;
        "disable-zoom"?: string;
        "disable-pan"?: string;
        "interaction-prompt"?: string;
        "touch-action"?: string;
        "shadow-intensity"?: string;
        "shadow-softness"?: string;
        exposure?: string;
        "tone-mapping"?: string;
      };
    }
  }
}
