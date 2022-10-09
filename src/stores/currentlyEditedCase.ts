import { writable, type Writable } from "svelte/store";

export const currentlyEditedCase: Writable<number> = writable(0);