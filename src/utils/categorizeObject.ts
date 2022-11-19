import { camelize } from "humps";

const categorizeData = <
  T extends Record<string, string | string[] | number | number[]>
>(
  data: T[],
  categorizeBy: keyof T,
  converToCamelCase = true
) =>
  data.reduce((acc, record) => {
    const categorizeByValue = record[categorizeBy];
    if (typeof categorizeByValue === "string") {
      const key = converToCamelCase
        ? camelize(categorizeByValue)
        : categorizeByValue;
      acc[key] = acc[key] ? [...acc[key], record] : [record];
    } else if (Array.isArray(categorizeByValue)) {
      categorizeByValue.forEach((val) => {
        if (typeof val === "string") {
          const key = converToCamelCase ? camelize(val) : val;
          acc[key] = acc[key] ? [...acc[key], record] : [record];
        }
      });
    }
    return acc;
  }, {} as Record<string, T[]>);

export default categorizeData;
