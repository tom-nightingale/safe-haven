export const truncateWords = (str: string, wordLimit: number) => {
  return `${str.split(" ").splice(0, wordLimit).join(" ")}...`;
};
