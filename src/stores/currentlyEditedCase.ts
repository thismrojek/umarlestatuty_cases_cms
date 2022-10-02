import { writable, type Writable } from "svelte/store";

export const currentlyEditedCase: Writable<string> = writable('')