export const getId = (url: string) => {
  const splitted = url.split('/');

  if (splitted.length < 2) {
    return '';
  }

  return splitted[splitted.length - 2];
};
