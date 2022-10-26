// const broadcast = require("../public/broadcast");
// const business = require("../public/business");
// const digitalArts = require("../public/digitalarts");
// const marketing = require("../public/marketing");
// const programming = require("../public/programming");
// const tutoring = require("../public/tutoring");

// const { PrismaClient } = require( "@prisma/client";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        categoryName: "Broadcast & Media",
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
        image: "marketing.png",
      },
      {
        categoryName: "Tutoring",
        image: "tutoring.png",
      },
      {
        categoryName: "Computing",
        image: "/programming",
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
