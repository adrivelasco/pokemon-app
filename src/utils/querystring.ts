export const getQueryParams = (url: string) => {
  return new URL(url).searchParams;
};
