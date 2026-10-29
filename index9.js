let averageGrade = 85;

if (averageGrade < 60) {
  console.log("Незадовільно");
} else if (averageGrade <= 70) {
  console.log("Задовільно");
} else if (averageGrade <= 80) {
  console.log("Добре");
} else if (averageGrade <= 90) {
  console.log("Дуже добре");
} else if (averageGrade <= 100) {
  console.log("Відмінно");
}

switch (true) {
  case averageGrade < 60:
    console.log("Незадовільно");
    break;
  case averageGrade >= 60 && averageGrade <= 70:
    console.log("Задовільно");
    break;
  case averageGrade >= 71 && averageGrade <= 80:
    console.log("Добре");
    break;
  case averageGrade >= 81 && averageGrade <= 90:
    console.log("Дуже добре");
    break;
  case averageGrade >= 91 && averageGrade <= 100:
    console.log("Відмінно");
    break;
}
