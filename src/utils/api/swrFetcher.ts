export const jsonFetcher = (...args) => fetch(...args).then(res => res.json());
export const postFetcher = async (url, { arg }) => {
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
