import { writable, type Writable } from "svelte/store";

export const filters: Writable<string> = writable('');