const resource = 'https://pokeapi.co/api/v2/pokemon';

export const getPockemonAPI = async (number) => {
  try {
    let response = await fetch(`${resource}/${number}`);
    let json = await response.json();
    const result = {
      id: json.id,
      name: json.name,
      img: json.sprites.front_default,
      coords: null,
    };
    return result;
  } catch (err) {
    throw new Error(err);
  }
};
