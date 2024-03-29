const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        categoryName: "Video and Animation",
        image: "/broadcast.png",
      },
      {
        categoryName: "Digital Arts & Design",
        image: "/digitalarts.png",
      },
      {
        categoryName: "Business & Finance",
        image: "/business.png",
      },
      {
        categoryName: "Marketing",
        image: "/marketing.png",
      },
      {
        categoryName: "Tutoring",
        image: "/tutoring.png",
      },
      {
        categoryName: "Computing",
        image: "/programming.png",
      },
    ],
  });

  const author = await prisma.user.createMany({
    data: [
      {
        name: "Sohrab",
        lastName: "Radmehr",
        password: "Password!",
        email: "sohrab@gmail.com",
        aboutMe: "I'm cool",
      },
      {
        name: "Sohrab2",
        lastName: "Radmehr",
        password: "Password!",
        email: "sohrab2@gmail.com",
        aboutMe: "I'm cool",
      },
      {
        name: "Sohrab3",
        lastName: "Radmehr",
        password: "Password!",
        email: "sohrab3@gmail.com",
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
