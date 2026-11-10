const grades = [10, 8, 12, 7, 9, 11];

function calculateAverage(grades) {
  let sum = 0;

  for (const grade of grades) {
    sum += grade;
  }

  return sum / grades.length;
}

function findMaxGrade(grades) {
  let max = grades[0];

  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > max) {
      max = grades[i];
    }
  }

  return max;
}

function countHighGrades(grades) {
  let highGrades = [];

  for (const grade of grades) {
    if (grade >= 10) {
      highGrades.push(grade);
    }
  }

  return highGrades.length;
}

function showResults(grades) {
  console.log(`Оцінки студента: ${grades.join(", ")}`);
  console.log(`Кількість оцінок: ${grades.length}`);
  console.log(`Середній бал: ${calculateAverage(grades)}`);
  console.log(`Найвища оцінка: ${findMaxGrade(grades)}`);
  console.log(`Кількість високих оцінок: ${countHighGrades(grades)}`);
}

showResults(grades);
