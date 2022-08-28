import axios from "axios";
import { API_BASE_URL } from "constants/constants";
import { Pokimon } from "../types/pokimon";


const getListOfPokimons  = async (offset : number,batchSize : number): Promise<Pokimon[]> => {
    const response = await axios.get(`${API_BASE_URL}?limit=${batchSize}&offset=${offset}`);
    return response.data.results;
}

const getDetailsPokemon = async (pokimonName : string): Promise<Pokimon> => {
    const response = await axios.get(`${API_BASE_URL}/${pokimonName}`);
    return response.data;
}

export { getListOfPokimons , getDetailsPokemon};