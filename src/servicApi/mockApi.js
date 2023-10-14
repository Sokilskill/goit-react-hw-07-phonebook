const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const fetchApi = async () => {
  const resp = await fetch(
    'https://65264e9f917d673fd76bfd10.mockapi.io/api/contacts',
    options
  );
  const data = await resp.json();
  return data;
};
