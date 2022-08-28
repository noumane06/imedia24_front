type Props = {
  isError: boolean;
};

export default function PokimonErrors({ isError }: Props) {
  return (
    <div>
      {isError && (
        <p className="info-text">
          There was an error while fetching pokemon data.
        </p>
      )}
    </div>
  );
}
