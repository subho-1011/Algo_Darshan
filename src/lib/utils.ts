import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateArray = (size: number) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    const randNum = Math.floor(Math.random() * 100);
    array.push(randNum);
  }

  return array;
};

export const slugify = (str: string) => {
  const slug = str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  return slug;
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
