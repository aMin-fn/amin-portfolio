import type { ComponentPropsWithoutRef } from "react";

import styles from "./ui.module.css";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`${styles.container} ${className}`.trim()}
      {...props}
    />
  );
}
