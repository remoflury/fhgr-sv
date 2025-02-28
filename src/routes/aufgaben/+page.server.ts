import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  formaction: async ({ request }) => {
    const data = await request.formData()

    const number = data.get('number')

    if (!number) {
      return fail(403, { message: "Nummer muss ausgefüllt sein."})
    }
    if (Number(number) >= 10) {
      return fail(403, { message: "Nummer muss grösser als 10."})
    }

    return {
      message: "Erfolgreiche Validierung"
    }
  }
};