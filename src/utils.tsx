
import { FC } from "react";

const compose =
  (...funcs: Function[]) =>
  (comp: FC<any>) => {
    return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
  }



const dateFormat = (date: string) =>
  new Date(date).toLocaleString("eng", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export { compose, dateFormat };
