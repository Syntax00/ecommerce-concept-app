import { createRef } from "react";

export const isMountedRef = createRef<boolean | null>();

export const navigationRef = createRef<object | null>();

export function navigate(name: string, params?: object | null) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}
