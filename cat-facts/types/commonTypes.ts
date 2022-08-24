export type TCatFact = {
  fact: string;
  length: number;
};

export type TLink = {
  url?: string;
  label: string;
  active: boolean;
};

export type TCatFactApiResponse = {
  data: TCatFact[];
  links: TLink[];
};
