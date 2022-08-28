export interface StoreType {
  isFetching: boolean;
  hasErrored: boolean;
  items: Pokimon[];
  itemDetails: PokimonDetail;
  offset: number;
  pokimonNameSelected: string;
}

export interface Pokimon {
  name: string;
  url: string;
}

export interface PokimonDetail {
  id ?: number;
  name ?: string;
  base_experience ?: number;
  height ?: number;
  is_default ?: boolean;
  order ?: number;
  weight ?: number;
  abilities ?: Ability[];
  forms ?: Species[];
  game_indices ?: GameIndex[];
  held_items ?: HeldItem[];
  location_area_encounters ?: string;
  moves ?: Move[];
  species ?: Species;
  sprites ?: Sprites;
  stats ?: Stat[];
  types ?: Type[];
  past_types ?: PastType[];
}

type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: Species;
};

type Species = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: Species;
};

type HeldItem = {
  item: Species;
  version_details: VersionDetail[];
};

type VersionDetail = {
  rarity: number;
  version: Species;
};

type Move = {
  move: Species;
  version_group_details: VersionGroupDetail[];
};

type VersionGroupDetail = {
  level_learned_at: number;
  version_group: Species;
  move_learn_method: Species;
};

type PastType = {
  generation: Species;
  types: Type[];
};

type Type = {
  slot: number;
  type: Species;
};

type GenerationV = {
  "black-white": Sprites;
};

type GenerationIv = {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
};

type Versions = {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
};

type Sprites = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
};

type GenerationI = {
  "red-blue": RedBlue;
  yellow: RedBlue;
};

type RedBlue = {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
};

type GenerationIi = {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
};

type Crystal = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type GenerationIii = {
  emerald: Emerald;
  "firered-leafgreen": Crystal;
  "ruby-sapphire": Crystal;
};

type Emerald = {
  front_default: string;
  front_shiny: string;
};

type Home = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type GenerationVii = {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
};

type DreamWorld = {
  front_default: string;
  front_female: null;
};

type GenerationViii = {
  icons: DreamWorld;
};

type Other = {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
};

type OfficialArtwork = {
  front_default: string;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: Species;
};
