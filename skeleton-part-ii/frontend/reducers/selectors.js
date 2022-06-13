export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectSinglePokemon = (state, id) => {
    let arr = Object.values(state.entities.pokemon)
    console.log(arr)
    // console.log(arr[id])
    return arr[id]
}