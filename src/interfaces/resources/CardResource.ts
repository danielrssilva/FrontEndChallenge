interface CardResource {
  id: string;
  name: string;
  types: string[];
  supertype: string;
  images: {
    small: string;
    large: string;
  };
  attacks: {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }[];
  weaknesses: {
    type: string;
    value: string;
  }[];
  resistances: {
    type: string;
    value: string;
  }[];
}

export default CardResource;
