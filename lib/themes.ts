export const themes = {
  default: {
    name: "Default",
    value: "default",
  },
  slate: {
    name: "Slate",
    value: "slate",
  },
  red: {
    name: "Red",
    value: "red",
  },
  rose: {
    name: "Rose",
    value: "rose",
  },
  orange: {
    name: "Orange",
    value: "orange",
  },
  green: {
    name: "Green",
    value: "green",
  },
  blue: {
    name: "Blue",
    value: "blue",
  },
  yellow: {
    name: "Yellow",
    value: "yellow",
  },
} as const;

export type Theme = (typeof themes)[keyof typeof themes];
