"use client";

import { useRef, type ReactNode } from "react";

interface LightboxTriggerProps {
  dialogId: string;
  label: string;
  className?: string;
}

/** Invisible button that opens the <dialog> with the given id. */
export function LightboxTrigger({
  dialogId,
  label,
  className = "",
}: LightboxTriggerProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-haspopup="dialog"
      className={className}
      onClick={() => {
        const dialog = document.getElementById(dialogId);
        if (dialog instanceof HTMLDialogElement) dialog.showModal();
      }}
    />
  );
}

interface LightboxDialogProps {
  id: string;
  label: string;
  children: ReactNode;
}

/**
 * Native modal <dialog>: the browser handles focus trapping, Escape and
 * focus return. A click on the empty backdrop area also closes it.
 */
export function LightboxDialog({ id, label, children }: LightboxDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <dialog
      ref={ref}
      id={id}
      aria-label={label}
      onClick={(event) => {
        if (event.target === event.currentTarget) ref.current?.close();
      }}
      className="m-0 hidden h-full max-h-none w-full max-w-none flex-col items-center justify-center bg-charcoal p-4 text-paper open:flex backdrop:bg-charcoal"
    >
      <button
        type="button"
        onClick={() => ref.current?.close()}
        className="absolute right-4 top-4 inline-flex min-h-12 items-center px-4 text-sm tracking-wide hover:text-silver"
      >
        Close
      </button>
      {children}
    </dialog>
  );
}