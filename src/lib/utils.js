// cn- class name 
// this class name function we will use tailwind merge to allow use to 
//      easily combine class names without writting too much code(a lot lines of class names)
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// //...classes means we can pass any number of classes
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
 
