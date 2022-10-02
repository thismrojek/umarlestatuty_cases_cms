import { writable, type Writable } from "svelte/store";

export const authState: Writable<boolean> = writable(false);