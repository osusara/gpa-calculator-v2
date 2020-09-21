import { addResults } from "../../../services/db";

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

export const subjectsFilter = (data, values) => {
  let i = 1;
  let compulsory = {};
  let elective = {};
  const { results } = values;

  if (results) {
    // eslint-disable-next-line array-callback-return
    data.years.map((year) => {
      // eslint-disable-next-line array-callback-return
      year.semesters.map((semester) => {
        if (semester.electiveSubjectsIndex[0] > 0) {
          // eslint-disable-next-line array-callback-return
          semester.subjects.map((item) => {
            if (!item.compulsory) {
              if (results[item.id]) {
                elective = {
                  ...elective,
                  [i]: {
                    id: item.id,
                    result: results[item.id].result,
                    credits: results[item.id].credits,
                  },
                };

                i++;
              }
            }
          });
        }

        // eslint-disable-next-line array-callback-return
        semester.subjects.map((item) => {
          if (item.compulsory) {
            if (results[item.id]) {
              compulsory = {
                ...compulsory,
                [item.id]: {
                  result: results[item.id].result,
                  credits: results[item.id].credits,
                },
              };
            }
          }
        });
      });
    });
  }

  return { compulsory, elective };
};

export const resultsSubmitHandler = (data, results, electives, authId) => {
  let resultsSet = results;

  for (
    let i = 1;
    i <= data.years[0].semesters[0].electiveSubjectsIndex[1];
    i++
  ) {
    if (electives[i]) {
      resultsSet = {
        ...resultsSet,
        [electives[i].id]: {
          result: electives[i].result,
          credits: electives[i].credits,
        },
      };
    }
  }

  const yearlyTotalGrades = [
    semesterTotalGrade(data.years[0].semesters[0], resultsSet) +
      semesterTotalGrade(data.years[0].semesters[1], resultsSet),
    semesterTotalGrade(data.years[1].semesters[0], resultsSet) +
      semesterTotalGrade(data.years[1].semesters[1], resultsSet),
    semesterTotalGrade(data.years[2].semesters[0], resultsSet) +
      semesterTotalGrade(data.years[2].semesters[1], resultsSet),
    semesterTotalGrade(data.years[3].semesters[0], resultsSet) +
      semesterTotalGrade(data.years[3].semesters[1], resultsSet),
  ];

  const yearlyTotalGPAs = [
    yearlyGPA(yearlyTotalGrades[0], data.years[0]),
    yearlyGPA(yearlyTotalGrades[1], data.years[1]),
    yearlyGPA(yearlyTotalGrades[2], data.years[2]),
    yearlyGPA(yearlyTotalGrades[3], data.years[3]),
  ];

  const totalGPA = fullGPA(yearlyTotalGrades, yearlyTotalGPAs);

  // setGpa({
  //   totalGPA,
  //   yearlyTotalGPAs,
  // });

  const dataSet = {
    totalGPA,
    yearlyTotalGPAs,
    results: resultsSet,
  };

  addResults(dataSet, authId);
  // return(dataSet);
};
