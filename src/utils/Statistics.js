export const getAverage = (data, variable) => {
  let total = 0;
  let sum = 0;

  data.forEach((element) => {
    if (element[variable] !== null && element[variable] !== undefined) {
      total++;
      sum += element[variable];
    }
  });

  return total === 0 ? 0 : sum / total;
};

export const getMostFrequentDirection = (data, variable) => {
  const counts = {};

  data.forEach((element) => {
    const value = element[variable];
    if (value) {
      if (counts[value]) {
        counts[value]++;
      } else {
        counts[value] = 1;
      }
    }
  });

  let mostFrequent = null;
  let maxCount = 0;

  for (const [key, count] of Object.entries(counts)) {
    if (count > maxCount) {
      mostFrequent = key;
      maxCount = count;
    }
  }
  return mostFrequent;
};
