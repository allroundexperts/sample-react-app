import categorizeObject from "./categorizeObject";

it("categorize object with camel case having an array key", () => {
  const result = categorizeObject(
    [
      { name: "The departed", genre: ["ThrillnChill", "adventure"] },
      { name: "Mexico gone", genre: ["ThrillnChill"] },
      { name: "Lahore 2 Lahore", genre: ["adventure"] },
    ],
    "genre",
    true
  );
  expect(result).toMatchObject({
    thrillnChill: [
      { name: "The departed", genre: ["ThrillnChill", "adventure"] },
      { name: "Mexico gone", genre: ["ThrillnChill"] },
    ],
    adventure: [
      { name: "The departed", genre: ["ThrillnChill", "adventure"] },
      { name: "Lahore 2 Lahore", genre: ["adventure"] },
    ],
  });
});

it("categorize object with camel case having an string key", () => {
  const result = categorizeObject(
    [
      { name: "The departed", genre: "ThrillnChill" },
      { name: "Mexico gone", genre: "ThrillnChill" },
      { name: "Lahore 2 Lahore", genre: "adventure" },
    ],
    "genre",
    true
  );
  expect(result).toMatchObject({
    thrillnChill: [
      { name: "The departed", genre: "ThrillnChill" },
      { name: "Mexico gone", genre: "ThrillnChill" },
    ],
    adventure: [{ name: "Lahore 2 Lahore", genre: "adventure" }],
  });
});

it("categorize object without camel case", () => {
  const result = categorizeObject(
    [
      { name: "The departed", genre: "ThrillnChill" },
      { name: "Mexico gone", genre: "ThrillnChill" },
      { name: "Lahore 2 Lahore", genre: "adventure" },
    ],
    "genre",
    false
  );
  expect(result).toMatchObject({
    ThrillnChill: [
      { name: "The departed", genre: "ThrillnChill" },
      { name: "Mexico gone", genre: "ThrillnChill" },
    ],
    adventure: [{ name: "Lahore 2 Lahore", genre: "adventure" }],
  });
});
