export function getLinkedUser(url: string) {
  const splitUrl: string[] = url.split("/");
  return splitUrl[splitUrl.length - 1];
}