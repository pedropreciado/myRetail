const dateParser = (dateString) => {
  let dateList = dateString.split(' ');

  return {
    month: dateList[1],
    day: dateList[2],
    year: dateList[5]
  };
};

export default dateParser;