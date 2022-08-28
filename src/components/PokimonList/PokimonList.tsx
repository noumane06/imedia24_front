import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokimons } from "../../store/actions";
import { Pokimon, StoreType } from "../../types/pokimon";
import PokimonCard from "../PokimonCard/PokimonCard";

import "./PokimonList.scss";
import { useBottomTrigger } from "../../hooks/useBottomTrigger";
import PokimonExceptions from "./PokimonExceptions";

type stateType = {
  Pokimons: StoreType;
};

export default function PokimonList() {
  const [isBottom, setIsBottom] = useBottomTrigger();
  const { Pokimons } = useSelector((state: stateType) => state);
  const dispatch = useDispatch();

  // get pokimons when page is loading
  useEffect(() => {
    dispatch(getPokimons());
  }, [dispatch]);

  // handle re-rendering when users get to the bottom of the page
  useEffect(() => {
    if (isBottom) {
      dispatch(getPokimons());
      setIsBottom(false);
    }
  }, [isBottom, dispatch, setIsBottom]);

  return (
    <>
      <div className="pokimon-list">
        {Pokimons.items.map((pokimon: Pokimon, index: number) => (
          <PokimonCard pokimon={pokimon} key={index} />
        ))}
      </div>
      <PokimonExceptions Pokimons={Pokimons} />
    </>
  );
}
