const users = [
  {
    name: "Іван",
    email: "ivan@gmail.com",
    age: 20
  },
  {
    name: "Марія",
    email: "maria@gmail.com",
    age: 22
  },
  {
    name: "Олег",
    email: "oleh@gmail.com",
    age: 25
  }
];

for (const user of users) {
  console.log("Ім'я:", user.name);
  console.log("Email:", user.email);
  console.log("Вік:", user.age);
}
