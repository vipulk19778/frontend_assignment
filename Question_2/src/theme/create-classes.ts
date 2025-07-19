// Simple utility to create CSS classes
export function createClasses(className: string): string;
export function createClasses<T extends Record<string, any>>(styles: T): T;
export function createClasses<T extends Record<string, any>>(input: T | string): T | string {
  return input;
}
