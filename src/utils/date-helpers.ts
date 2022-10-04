export const dateConverter = (stamp) => {
  const time = new Date(stamp * 1000).getMonth() + 1;

  return time.toString();
};
