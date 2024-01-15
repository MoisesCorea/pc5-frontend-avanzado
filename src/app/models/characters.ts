export interface CharactersResponse {
  akatsuki: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
}

export interface Character {
  id: number;
  name: string;
  images: Array<any>;
  debut: Debut;
  personal: Personal;
  family: object;
  jutsu: Array<any>;
  natureType: Array<any>;
  uniqueTraits: Array<any>;
  tools: Array<any>;
}

export interface Debut {
  manga?: string;
  anime?: string;
  novel?: string;
}

export interface Personal {
  affiliation: Array<any>;
  clan: string;
}
