export const jsonFetcher = async (arg: string) => {
  const response = await fetch(arg)
  const jsonData = await response.json();
  return jsonData;
}
export const postFetcher = async (url: string, { arg }: { arg: any }) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(arg)
  });
  const jsonData = await response.json();
  return jsonData;
}
