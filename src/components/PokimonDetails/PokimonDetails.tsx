import { Accordion, Avatar } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokimonsDetails } from "../../store/actions";
import { StoreType } from "../../types/pokimon";
import "./PokimonDetails.scss";
import Abilities from "./Abilities";
import Stats from "./Stats";
import Sprites from "./Sprites";
type Props = {
  pokemonName: string;
  imageUrl: string | undefined;
};
type stateType = {
  Pokimons: StoreType;
};
export default function PokimonDetails({ pokemonName, imageUrl }: Props) {
  const { Pokimons } = useSelector((state: stateType) => state);
  const { itemDetails } = Pokimons;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokimonsDetails(pokemonName));
    console.log(itemDetails);
  }, [dispatch]);
  return (
    <div className="pokimon-details-container">
      <div className="pokimon-details-header">
        <div className="pokimon-details-profile">
          <Avatar size={"lg"} src={imageUrl} variant="outline" />
          <div className="dt">
            <span>{pokemonName}</span>
            <div className="pokimon-details-physique">
              <div className="pokimon-details-item">
                <span className="key">Height : </span>
                <span className="value">{itemDetails.height} dm </span>
              </div>
              <div className="pokimon-details-item">
                <span className="key">Weight : </span>
                <span className="value">{itemDetails.weight} hg </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pokimon-details-body">
        <Accordion defaultValue={"Abilities"} variant="contained" radius="md">
          <Accordion.Item value="Abilities" className="pokimon-section">
            <Accordion.Control>
              <span className="accordion-title">Abilities</span>
            </Accordion.Control>
            <Accordion.Panel>
              <Abilities itemDetails={itemDetails} />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Stats" className="pokimon-section">
            <Accordion.Control>
              <span className="accordion-title">Stats</span>
            </Accordion.Control>
            <Accordion.Panel>
              <Stats itemDetails={itemDetails} />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Sprites" className="pokimon-section">
            <Accordion.Control>
              <span className="accordion-title">Sprites</span>
            </Accordion.Control>
            <Accordion.Panel>
              <Sprites itemDetails={itemDetails} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
