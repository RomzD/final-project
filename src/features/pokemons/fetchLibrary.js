export const POKEMON_PORTION = 10;
const SINGLE_POKEMON_INDEX = 0;

function generateRandomNum() {
    let rndNumber = (Math.random() * 720).toFixed();
    return rndNumber;
}

function formRequest(idList) {
    let idToRequest = '';
    if (Array.isArray(idList)) {
        idList.forEach((id, i) => {
            idToRequest += i === 0 ? `?id=${id}` : `&id=${id}`;
        })
    } else {
        idToRequest += `?id=${idList}`
    }
    return idToRequest;
}



export async function fetchPokemonsCallback(id = false) {
    let idList;

    if (!id) {
        idList = Array(POKEMON_PORTION).fill(0).map(() => generateRandomNum());
    } else {
        idList = id;
    }
    const fetchLink = `http://localhost:3000/pokemons`;
    const fetchIds = formRequest(idList);

    const fetchURL = fetchLink + fetchIds;

    let fetchedPokemons = await fetch(fetchURL).then(response => {
                            if (response.ok) {
                                return response.json()
                            } else {
                                throw new Error('Error occured');
                            }})
                            .then(result => {
                                if (result.length === 1) {
                                    return result[SINGLE_POKEMON_INDEX];
                                }
                                return result;
                            })
        .catch(err => err);
    return fetchedPokemons;
}