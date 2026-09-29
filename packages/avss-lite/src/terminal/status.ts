import { Symbols } from "./symbols";

export function success(message: string): void {
  console.log(`   ${Symbols.success} ${message}`);
}

export function error(message: string): void {
  console.log(`   ${Symbols.error} ${message}`);
}

export function warning(message: string): void {
  console.log(`   ${Symbols.warning} ${message}`);
}

export function info(message: string): void {
  console.log(`   ${Symbols.info} ${message}`);
}

export function pass(message: string): void {
  success(message);
}

export function fail(message: string): void {
  error(message);
}