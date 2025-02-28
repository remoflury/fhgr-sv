import { PUBLIC_CUSTOM_KEY } from "$env/static/public";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ fetch, request, url }) => {

  const headers = request.headers
  const apiKey = headers.get('x-api-key')

  if (!apiKey || apiKey != PUBLIC_CUSTOM_KEY) {
    return json("Authorization failed, no or invalid API Key provided", {status: 401})
  }

  const q = url.searchParams.get('q')
  const userUrl = (q && q !== 'null') ? `https://dummyjson.com/users/search?q=${q}` : `https://dummyjson.com/users`

  const res = await fetch(userUrl)
  const data = await res.json()

  if (res.status >=400) {
    return json("Ups, da lief etwas schief", {status: res.status})
  }
 
  
  return json(data)
};