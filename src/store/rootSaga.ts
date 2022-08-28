import {all , fork , call, put, takeLatest, select } from "redux-saga/effects";
import { getDetailsPokemon, getListOfPokimons } from "../services/pokimons";
import { BATCH_SIZE } from "../constants/constants";
import {
  getPokimonsSuccess,
  getPokimonsFailure,
  GET_POKIMONS,
  GET_POKIMONS_DETAILS,
  getPokimonsDetailsSuccess,
  getPokimonsDetailsFailure,
} from "./actions";
import { Pokimon, PokimonDetail } from "../types/pokimon";

function* fetchPokimonsSaga() {
  yield takeLatest([GET_POKIMONS], function* ({ type }) {
    try {
      const { offset } = yield select(
        (state) => state.Pokimons
      );

      const Pokimons = (yield call(
        getListOfPokimons,
        offset,
        BATCH_SIZE
      )) as Pokimon[];

      if (type === GET_POKIMONS) {
        console.log("GET_POKIMONS", getPokimonsSuccess(Pokimons));
        yield put(getPokimonsSuccess(Pokimons));
      }
      if (type === GET_POKIMONS_DETAILS) {
        console.log("GET_POKIMONS_DETAILS", getPokimonsSuccess(Pokimons));
        yield put(getPokimonsSuccess(Pokimons));
      }
    } catch (error) {
      if (type === GET_POKIMONS) {
        yield put(getPokimonsFailure(error));
      }
    }
  });
}

function* fetchPokimonsDetailsSaga() {
  yield takeLatest([GET_POKIMONS_DETAILS], function* ({ type }) {
    try {
      const { pokimonNameSelected } = yield select((state) => state.Pokimons);
      const PokimonDetails = (yield call(
        getDetailsPokemon,
        pokimonNameSelected
      )) as PokimonDetail;
      if (type === GET_POKIMONS_DETAILS) {
        console.log("GET_POKIMONS_DETAILS", getPokimonsDetailsSuccess(PokimonDetails));
        yield put(getPokimonsDetailsSuccess(PokimonDetails));
      }
    } catch (error) {
      console.log(error);
      if (type === GET_POKIMONS_DETAILS) {
        yield put(getPokimonsDetailsFailure(error));
      }
    }
  });
}



export default function* rootSaga() {
  yield all([fork(fetchPokimonsSaga),fork(fetchPokimonsDetailsSaga)]);
}
