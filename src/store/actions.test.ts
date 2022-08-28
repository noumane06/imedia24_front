import { getPokimons, getPokimonsSuccess } from "./actions";

it("Type of action should be GET_POKIMONS", () => {

    const pokemons = getPokimons();
    expect(pokemons.type).toEqual("GET_POKIMONS");

});

it("Type of action should be GET_POKIMONS_SUCCESS", () => {
    
        const pokemons = getPokimonsSuccess([]);
        expect(pokemons.type).toEqual("GET_POKIMONS_SUCCESS");
        expect(pokemons.Pokimons).toEqual([]);
});
