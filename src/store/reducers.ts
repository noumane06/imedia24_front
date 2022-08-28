import {
  GET_POKIMONS,
  GET_POKIMONS_SUCCESS,
  GET_POKIMONS_FAILURE,
  GET_POKIMONS_DETAILS,
  GET_POKIMONS_DETAILS_SUCCESS,
} from "../store/actions";
import { BATCH_SIZE } from "../constants/constants";
import { AnyAction } from 'redux'
import { StoreType } from "../types/pokimon";
/**
 * Check if number of items exceeds the desired end of catalogue.
 *
 * @param {number} currentPage.
 * @param {number} batchSize.
 * @param {number} maxCatalogueLength.
 * @returns {boolean}
 */


const initialState:StoreType = {
  isFetching: true,
  hasErrored: false,
  items: [],
  itemDetails: {},
  offset: 0,
  pokimonNameSelected : "",
};

/**
 * Get POKIMONS.
 *
 */
const Pokimons = (state = initialState, action :AnyAction) => {

  switch (action.type) {
    case GET_POKIMONS:
      return {
        ...state,
        isFetching: true,
        hasErrored: false
      };
    case GET_POKIMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasErrored: false,
        items: [...state.items, ...action.Pokimons],
        offset: state.offset + BATCH_SIZE
      };
    case GET_POKIMONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasErrored: true
      };
    case GET_POKIMONS_DETAILS : 
      return {
        ...state,
        isFetching: true,
        hasErrored: false,
        pokimonNameSelected : action.name
      };
    case GET_POKIMONS_DETAILS_SUCCESS :
      return {
        ...state,
        isFetching: false,
        hasErrored: false,
        itemDetails: action.PokimonDetails
      };
    default:
      return state;
  }
};

export default Pokimons;
