export function nameToSlug(name: string) {
  return name.toLowerCase().split(" ").join("-");
}
