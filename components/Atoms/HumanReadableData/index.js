export const HRD = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    // weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return humanReadableDate;
};
