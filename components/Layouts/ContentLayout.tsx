import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return <section className="max-w-[80rem] mx-auto">{children}</section>;
}
