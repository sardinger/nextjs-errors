export async function getClipBySlug(slug) {
  console.log(slug);
  // Simulate async lookup
  await new Promise((r) => setTimeout(r, 300));

  // Always fail (for demo / testing)
  return null;
}
