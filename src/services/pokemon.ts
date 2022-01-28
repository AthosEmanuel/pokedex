

const axios = require('axios');

export interface PokemonListProps {
    name: string
    url: string
    results: Array<PokemonListProps>
    previus: string
    next: string
}

export interface PokemonDetailsProps {
    forms: string
    name:string
    url: string
    results: Array<PokemonListProps>
}


const getAllPokemons = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return data
    } catch (error) {
        console.error(error)
    }
}

const getPokemonInfo = async (id: number) => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    } catch (error) {
        console.error(error)
    }
}

const getPokemonDetails = async (url: any) => {
    try {
        const { data } = await axios.get(url.detail)
        return data
    } catch (error) {
        console.error(error)
    }
}

const getImage = async (id: number) => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        console.log(data)
        return data.sprites.front_default
    } catch (error) {
        console.error(error)
    }
}


const nextPage = async (url: string) => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.error(error)
    }
}

const previousPage = async (url: string) => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.error(error)
    }
}

export { getAllPokemons, getPokemonInfo, nextPage, previousPage, getImage, getPokemonDetails }
