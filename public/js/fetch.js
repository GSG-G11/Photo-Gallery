const makeRequest = (data, route, httpMethod) => fetch(route, {
  method: httpMethod,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
}).then((res) => res.json());
