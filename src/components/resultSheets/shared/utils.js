export const gradeToPoints = (grade) => {
  let points;
  grade === "A+" || grade === "A" || grade === "a" || grade === "a+"
    ? (points = 4.0)
    : grade === "A-" || grade === "a-"
    ? (points = 3.7)
    : grade === "B+" || grade === "b+"
    ? (points = 3.3)
    : grade === "B" || grade === "b"
    ? (points = 3.0)
    : grade === "B-" || grade === "b-"
    ? (points = 2.7)
    : grade === "C+" || grade === "c+"
    ? (points = 2.3)
    : grade === "C" || grade === "c"
    ? (points = 2.0)
    : grade === "C-" || grade === "c-"
    ? (points = 1.7)
    : grade === "D+" || grade === "d+"
    ? (points = 1.3)
    : grade === "D" || grade === "d"
    ? (points = 1.0)
    : (points = 0.0);

  return points;
};

export const semesterTotalGrade = (dataSet, resultsSet) => {
  let total = 0;
  // eslint-disable-next-line array-callback-return
  dataSet.subjects.map((item) => {
    if (resultsSet[item.id]) {
      const points =
        gradeToPoints(resultsSet[item.id].result) * resultsSet[item.id].credits;
      total += points;
    }
  });

  return total;
  // return (total / dataSet.totalCredits).toFixed(4);
};

export const yearlyGPA = (grade, dataSet) => {
  const yearlyGPA =
    grade /
    (dataSet.semesters[0].totalCredits + dataSet.semesters[1].totalCredits);
  return yearlyGPA;
};

export const fullGPA = (yearlyCredits, yearlyGPA, specialized = true) => {
  let GPA = 0;
  let divisor = 0;

  if (specialized) {
    divisor =
      yearlyCredits[0] * 0.2 +
      yearlyCredits[1] * 0.2 +
      yearlyCredits[2] * 0.3 +
      yearlyCredits[3] * 0.3;

    if (divisor > 0) {
      GPA =
        (yearlyGPA[0] * yearlyCredits[0] * 0.2 +
          yearlyGPA[1] * yearlyCredits[1] * 0.2 +
          yearlyGPA[2] * yearlyCredits[2] * 0.3 +
          yearlyGPA[3] * yearlyCredits[3] * 0.3) /
        divisor;
    }

  } else {
    divisor =
      yearlyCredits[0] * 0.3 + yearlyCredits[1] * 0.3 + yearlyCredits[2] * 0.4;

    if (divisor > 0) {
      GPA =
        (yearlyGPA[0] * yearlyCredits[0] * 0.3 +
          yearlyGPA[1] * yearlyCredits[1] * 0.3 +
          yearlyGPA[2] * yearlyCredits[2] * 0.4) /
        divisor;
    }
  }

  return GPA;
};
