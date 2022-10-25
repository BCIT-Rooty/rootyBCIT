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
        image: "https://rootys3bucket.s3.us-west-1.amazonaws.com/f8e63bfc678a569581a0defea8bb0957",
      },
      {
        categoryName: "Digital Arts & Design",
        image: "https://rootys3bucket.s3.us-west-1.amazonaws.com/c247c79ef0a4de48038ebf42e346354c",
      },
      {
        categoryName: "Business & Finance",
        image: "https://rootys3bucket.s3.us-west-1.amazonaws.com/273d1fa7ad0df7f21f84a2ceaaae4c6f",
      },
      {
        categoryName: "Marketing",
        image: "https://rootys3bucket.s3.us-west-1.amazonaws.com/ccb7ffe9a5b88f3e40f58658634d9c97 ",
      },
      {
        categoryName: "Tutoring",
        image: "https://rootys3bucket.s3.us-west-1.amazonaws.com/e32e76a3b7d651bd529b6d3f8b418c9f",
      },
      {
        categoryName: "Computing",
        image: "https://rootys3bucket.s3.us-west-1.amazonaws.com/f6293f3eb38925b06fc91bf084dd42c1",
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
