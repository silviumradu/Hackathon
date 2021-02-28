import { default as install } from "x5-gmaps";

export default async ({ Vue }) => {
  install(Vue, {key: "AIzaSyB4lr9_Ip2ErkPpzUD9uuRIOFRdxU7UP-g", libraries: ["places"]});
  // install(Vue, { key: "XXXXXX", libraries: ["places"] });
};
