import { StoreType } from "../../types/pokimon";
import { Loader } from "@mantine/core";
import PokimonErrors from "./PokimonErrors";

type Props = {
  Pokimons: StoreType;
};

export default function PokimonExceptions({ Pokimons }: Props) {
  return (
    <div>
      {Pokimons.isFetching ? (
        <div className="pokimon-list-loading">
          <div className="pokimon-list-loading">
            <Loader size={"lg"} />
          </div>
        </div>
      ) : (
        <PokimonErrors isError={Pokimons.hasErrored} />
      )}
    </div>
  );
}
