import { writable } from 'svelte/store';
import type { DummyJsonProduct } from './types';

export const cartStore = writable<DummyJsonProduct[]>([]);
