"use client";

import { useActionState } from "react";
import { createClip } from "../actions";

const initialState = {
  message: "",
};

export default function Form() {
  // state is the returned message, formAction calls createClip on form submit
  const [state, formAction, pending] = useActionState(createClip, initialState);

  const content = JSON.stringify(
    { resolution: "1920x1080", format: "mp4", size_mb: 84.3 },
    null,
    2,
  );
  return (
    <form action={formAction}>
      <label htmlFor="title">Video Metadata</label>
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        defaultValue={content}
        rows={8}
        className="rounded border p-2 font-mono"
        required
      />{" "}
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  );
}
