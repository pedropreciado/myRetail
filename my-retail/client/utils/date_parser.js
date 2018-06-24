const dateParser = (dateString) => {
  "Mon Mar 11 13:13:55 UTC 2013"
  let dateList = dateString.split(' ');

  return {
    month: dateList[1],
    day: dateList[2],
    year: dateList[5]
  };
};

export default dateParser;