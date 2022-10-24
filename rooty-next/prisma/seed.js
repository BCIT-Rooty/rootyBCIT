// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        categoryName: "Broadcast & Media",
      },
      {
        categoryName: "Digital Arts & Design",
      },
      {
        categoryName: "Business & Finance",
      },
      {
        categoryName: "Marketing",
      },
      {
        categoryName: "Tutoring",
      },
      {
        categoryName: "Computing",
      },
    ],
  });

  const author = await prisma.user.createMany({
    data: [
      {
        name: "Sohrab",
        lastname: "radmehr",
        password: "Password!",
        email: "sohrab@gmail.com",
        aboutMe: "I'm cool", 
      },
    ],
  });
  console.log({ categories, author });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
