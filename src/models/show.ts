export type Show = {
  id: number;
  name: string;
  rating: { average?: number };
  image?: { medium: string; original: string };
  premiered?: string;
  summary: string;
};

export const yearPremiered = (show: Show) =>
  show.premiered && show.premiered.split("-")[0];
