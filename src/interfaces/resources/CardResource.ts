export interface AttackI {
  name: string;
  cost: string[];
  damage: string;
  text: string;
}

export interface ModifierI {
  type: string;
  value: string | null;
}
export interface AbilityI {
  name: string;
  text: string;
  type: string;
}

interface CardResource {
  id: string;
  name: string;
  types?: string[];
  supertype: string;
  rules: string[];
  images: {
    small: string;
    large: string;
  };
  attacks: AttackI[];
  abilities: AbilityI[];
  weaknesses: ModifierI[];
  resistances: ModifierI[];
}

export default CardResource;
