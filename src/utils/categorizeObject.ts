import { camelize } from "humps";

const categorizedData = <
  T extends Record<string, string | string[] | number | number[]>
>(
  data: T[],
  categorizeBy: keyof T,
  converToCamelCase = true
) =>
  data.reduce((acc, movie) => {
    const categorizeByValue = movie[categorizeBy];
    if (typeof categorizeByValue === "string") {
      const key = converToCamelCase
        ? camelize(categorizeByValue)
        : categorizeByValue;
      acc[key] = acc[key] ? [...acc[key], movie] : [movie];
    } else if (Array.isArray(categorizeByValue)) {
      categorizeByValue.forEach((val) => {
        if (typeof val === "string") {
          const key = converToCamelCase ? camelize(val) : val;
          acc[key] = acc[key] ? [...acc[key], movie] : [movie];
        }
      });
    }
    return acc;
  }, {} as Record<string, T[]>);

export default categorizedData;
