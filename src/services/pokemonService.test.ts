import axios from "axios";
import { getListOfPokimons } from "./pokimons";

jest.mock('axios');

it("should test fetching pokemons",async()=>{
    axios.get = jest.fn().mockResolvedValue({
        data: {
            results: [{
                name: "pikachu",
                url: "https://pokeapi.co/api/v2/pokemon/pikachu"
            }]
        }
    });
    const response = await getListOfPokimons(0,10);
    console.log(response);
    
    expect(response).toEqual([
        { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' }
      ]);
})