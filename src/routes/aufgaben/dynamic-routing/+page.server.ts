import type { DummyJsonProductProps } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  
  const res = await fetch('https://dummyjson.com/products?limit=10')
  const data: DummyJsonProductProps = await res.json()

  return {
    products: data
  }
};