import { RefObject, useEffect } from 'react';

type ClickOutsideCallback = () => void;

const useClickOutSide = (
    ref: RefObject<HTMLElement>,
    callback: ClickOutsideCallback
) => {
    useEffect(() =>{
        const handleClickOutside = (event:MouseEvent) => {
          if(ref.current && !ref.current.contains(event.target as Node)){
           callback();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
}
export default useClickOutSide;