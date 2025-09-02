/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

export function useOnClickOutside(
  ref: React.RefObject<any>,
  handler: (e: React.MouseEvent<any>) => void,
  insideClickhandler?: (e: React.MouseEvent<any>) => void,
) {
  React.useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        if (insideClickhandler) insideClickhandler(event);
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, insideClickhandler]);
}
