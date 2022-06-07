export type Collection<ResultsType = unknown> = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ResultsType[];
};
