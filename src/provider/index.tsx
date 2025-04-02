import { PropsWithChildren } from "react";
import Lenis from "./lenis";

export default function Provider({ children }: PropsWithChildren) {
  return <Lenis>{children}</Lenis>;
}
