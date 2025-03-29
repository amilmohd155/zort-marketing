import * as React from "react";
import { SVGProps } from "react";
const Circles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="#4E73E4" strokeWidth={2} />
    <circle cx={16} cy={16} r={13} stroke="#577AE5" strokeWidth={2} />
    <circle cx={16} cy={16} r={11} stroke="#6081E7" strokeWidth={2} />
    <circle cx={16} cy={16} r={9} stroke="#7A96EB" strokeWidth={2} />
    <circle cx={16} cy={16} r={7} stroke="#90A8EE" strokeWidth={2} />
    <circle cx={16} cy={16} r={5} stroke="#BDCBF5" strokeWidth={2} />
    <circle cx={16} cy={16} r={4} fill="#D3DCF8" />
  </svg>
);
export default Circles;
