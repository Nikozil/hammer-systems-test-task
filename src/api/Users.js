const resource = 'https://jsonplaceholder.typicode.com';

export const getUsersAPI = async () => {
  try {
    let response = await fetch(`${resource}/users`);
    let json = await response.json();
    return json;
  } catch (err) {
    throw new Error(err);
  }
};
