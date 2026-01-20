import { getClipBySlug } from "../lib/posts";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = await params;
  const clip = await getClipBySlug(slug);

  if (!clip) {
    notFound(); // Display the not-found component
  }

  return <div>{clip.format}</div>;
}
