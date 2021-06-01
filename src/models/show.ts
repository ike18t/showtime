export type Show = {
  id: number;
  name: string;
  rating: { average: number | null };
  image: { medium: string; original: string } | null;
  premiered: string | null;
  summary: string;
};

export const yearPremiered = (show: Show) =>
  show.premiered && show.premiered.split("-")[0];
