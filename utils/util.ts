export function LogError(error: unknown) {
  console.log((<Error>error).message);
}
