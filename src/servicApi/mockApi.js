const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const fetchApi = async () => {
  const resp = await fetch(
    'https://65264e9f917d673fd76bfd10.mockapi.io/api/contacts',
    // 'https://6527d0cb931d71583df16f3d.mockapi.io/contacts/contacts',
    options
  );
  const data = await resp.json();
  return data;
};
