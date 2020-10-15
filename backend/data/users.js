import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ngoc Lac",
    email: "ngoclac@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anh Khoa",
    email: "anhkhoa@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
