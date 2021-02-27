import { default as install } from "x5-gmaps";

export default async ({ Vue }) => {
  install(Vue, "XXXXXX");
  // install(Vue, { key: "XXXXXX", libraries: ["places"] });
};
