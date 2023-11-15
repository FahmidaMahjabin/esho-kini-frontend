import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type IDebounced = {
  searchQuery: string;
  delay: number;
};
export const useDebounced = ({ searchQuery, delay }: IDebounced) => {
  const [debouncedTerm, setDebouncedTerm] = useState<string>(searchQuery);
  useEffect(() => {
    const debouncer = setTimeout(() => {
      setDebouncedTerm(searchQuery);
      return () => {
        clearTimeout(debouncer);
      };
    }, delay);
  }, [searchQuery, delay]);

  return debouncedTerm;
};
