const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        categoryId: 1,
        categoryName: "Video and Animation",
        image: "/broadcast.png",
      },
      {
        categoryId: 2,
        categoryName: "Digital Arts & Design",
        image: "/digitalarts.png",
      },
      {
        categoryId: 3,
        categoryName: "Business & Finance",
        image: "/business.png",
      },
      {
        categoryId: 4,
        categoryName: "Marketing",
        image: "/marketing.png",
      },
      {
        categoryId: 5,
        categoryName: "Tutoring",
        image: "/tutoring.png",
      },
      {
        categoryId: 6,
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

  const author1 = await prisma.user.findUnique({
    where: {
      userId: 1,
    },
  });

  console.log(author);
  // const program = await prisma.program.createMany({
  //   data: [
  //     {
  //       programName: "Full-Stack Web Development",
  //       authorId: author1.userId
  //     },
  //   ],
  // });

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
