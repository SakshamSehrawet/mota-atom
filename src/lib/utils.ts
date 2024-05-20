import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNowStrict } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function relativeDate(from: Date){
  return formatDistanceToNowStrict(from,{addSuffix: true})
}
export function avatarPlaceholder(seed:String){
  return "https://api.dicebear.com/8.x/fun-emoji/svg?size=100&&seed="+"seed";
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}