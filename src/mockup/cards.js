let poke = []
let types = []
async function getPoke(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  res = await res.json();
  poke.push(res)
  
}
const filtPoke = (arr) => {
  
  const filtered = arr.map((p) => {
    return {
      id: p.id,
      name: p.name,
      sprite:p.sprites.front_default,
      types: p.types,
      cry: p.cries.legacy
    };
  });
  return filtered
};


for (let i = 1; i <= 151; i++) {
  await getPoke(i)
  console.log(i*100/151)
  
}


console.log(JSON.stringify(filtPoke(poke)))




async function getTypes(id) {
  const url = `https://pokeapi.co/api/v2/type/${id}`;
  let res = await fetch(url);
  res = await res.json();
  types.push(res)
  
}
const filtType = (arr) => {
  
  const filtered = arr.map((p) => {
    return {
      name: p.name,
      sprite: p.sprites["generation-iii"].emerald
    };
  });
  return filtered
};
/*
for (let i = 1; i <= 16; i++) {
  await getTypes(i)
  console.log(i*100/16)
  
}


console.log(JSON.stringify(filtType(types)))
*/