import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Full origin for image/assets on GitHub Pages; empty in dev so paths work locally */
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://prabathkv96.github.io/personal-web'
    : ''

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
