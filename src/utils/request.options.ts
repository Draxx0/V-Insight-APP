export type RequestOptions = {
  headers: {
    'Content-Type': 'application/json';
  };
  body: string;
  method: 'POST';
  mode: 'cors';
};

export function createRequestOptions<T>(data: T): RequestOptions {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
  };
}
