export const dateConverter = (stamp) => {
  const date = new Date(stamp * 1000);
  const day = date.getDate();
  const month = date.getMonth();
  const hour = date.getHours();
  let fullMonth;

  switch (month) {
    case 0:
      fullMonth = 'January';
      break;
    case 1:
      fullMonth = 'February';
      break;
    case 2:
      fullMonth = 'March';
      break;
    case 3:
      fullMonth = 'April';
      break;
    case 4:
      fullMonth = 'May';
      break;
    case 5:
      fullMonth = 'June';
      break;
    case 6:
      fullMonth = 'July';
      break;
    case 7:
      fullMonth = 'August';
      break;
    case 8:
      fullMonth = 'September';
      break;
    case 9:
      fullMonth = 'October';
      break;
    case 10:
      fullMonth = 'November';
      break;
    case 11:
      fullMonth = 'December';
      break;
  }
  const readableDate = `${day} ${fullMonth}, ${hour}:00`;

  return readableDate;
};
