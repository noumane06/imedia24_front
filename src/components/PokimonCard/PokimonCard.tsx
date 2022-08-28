import { Card, Image, Text, Button, Group, Modal } from "@mantine/core";
import {  useState } from "react";
import { useImageExtract } from "../../hooks/useImageExtract";
import { Pokimon } from "../../types/pokimon";
import PokimonDetails from "../PokimonDetails/PokimonDetails";
import "./PokimonCard.scss";
type Props = {
  pokimon: Pokimon;
};

export default function PokimonCard({ pokimon }: Props) {
  const imageUrl = useImageExtract(pokimon.url);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        shadow="md"
        p="lg"
        radius="md"
        withBorder
        className="pokimon-card-container"
      >
        <Card.Section>
          <Image
            src={imageUrl}
            alt={pokimon.name}
            height={200}
            onLoad={() => setIsLoading(false)}
            withPlaceholder={isLoading || pokimon.url.split("/").length < 2}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{pokimon.name}</Text>
        </Group>
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() => setIsModalOpen(true)}
        >
          View details
        </Button>
      </Card>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pokimon details"
        size="lg"
        overflow="inside"
      >
        <PokimonDetails pokemonName={pokimon.name} imageUrl={imageUrl} />
      </Modal>
    </>
  );
}
