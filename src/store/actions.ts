import { Pokimon, PokimonDetail } from "../types/pokimon";

export const GET_POKIMONS = "GET_POKIMONS";
export const GET_POKIMONS_SUCCESS = "GET_POKIMONS_SUCCESS";
export const GET_POKIMONS_FAILURE = "GET_POKIMONS_FAILURE";
export const GET_POKIMONS_DETAILS = "GET_POKIMONS_DETAILS";
export const GET_POKIMONS_DETAILS_SUCCESS = "GET_POKIMONS_DETAILS_SUCCESS";
export const GET_POKIMONS_DETAILS_FAILURE = "GET_POKIMONS_DETAILS_FAILURE";

/**
 * Get POKIMONS.
 *
 */
export const getPokimons = () => {
  return {
    type: GET_POKIMONS
  };
};

/**
 *  Pokimons successfully received.
 *
 */
export const getPokimonsSuccess = (Pokimons : Pokimon[]) => {
  return {
    type: GET_POKIMONS_SUCCESS,
    Pokimons
  };
};

/**
 * Failed to get Pokimons.
 *
 */
export const getPokimonsFailure = (errors: any) => {
  return {
    type: GET_POKIMONS_FAILURE,
    errors
  };
};

/**
 * Get POKIMONS.
 *
 */
 export const getPokimonsDetails = (name : string) => {
  return {
    type: GET_POKIMONS_DETAILS,
    name
  };
};

/**
 *  Pokimons successfully received.
 *
 */
export const getPokimonsDetailsSuccess = (PokimonDetails : PokimonDetail) => {
  return {
    type: GET_POKIMONS_DETAILS_SUCCESS,
    PokimonDetails
  };
};

/**
 * Failed to get Pokimons.
 *
 */
export const getPokimonsDetailsFailure = (errors: any) => {
  return {
    type: GET_POKIMONS_DETAILS_FAILURE,
    errors
  };
};

