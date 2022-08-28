import { PokimonDetail } from "../../types/pokimon";
import { Image } from '@mantine/core';

type Props = {
    itemDetails: PokimonDetail
}
export default function Sprites({itemDetails}: Props) {
  return (
    <div
      className="pokimon-section-images"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between	",
      }}
    >
      <Image
        src={itemDetails.sprites?.front_shiny}
        alt="front_default"
        width={"50%"}
      />
      <Image
        src={itemDetails.sprites?.back_shiny}
        alt="back_default"
        width={"50%"}
      />
      <Image
        src={itemDetails.sprites?.back_default}
        alt="front_shiny"
        width={"50%"}
      />
      <Image
        src={itemDetails.sprites?.front_default}
        alt="back_shiny"
        width={"50%"}
      />
    </div>
  );
}