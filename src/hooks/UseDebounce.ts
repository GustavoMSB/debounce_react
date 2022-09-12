import { useRef } from "react";

export function UseDebounce ( func : (text: string) => void, delay : number) {
  const timeoutRef = useRef(0); 
  
  function debounceFunction(text: string) {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      func(text);
    }, delay)
  }

  return debounceFunction;
}
