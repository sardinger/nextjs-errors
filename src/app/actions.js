"use server";

// Server function used in a useActionState hook when a form is submitted
export async function createClip(prevState, formData) {
  console.log(formData);

  //   const res = await fetch("https://rickandmortyapi.com/api/character", {
  //     method: "GET",
  //   });
  //   const json = await res.json();

  await new Promise((r) => setTimeout(r, 800));

  //   if (!res.ok) {
  //     return { message: "Failed to create post" };
  //   }

  return {
    message: "An error occured while while creating the clip.",
  };
}
