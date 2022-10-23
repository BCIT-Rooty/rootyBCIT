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

  //   const bob = await prisma.user.upsert({
  //     where: { email: 'bob@prisma.io' },
  //     update: {},
  //     create: {
  //       email: 'bob@prisma.io',
  //       name: 'Bob',
  //       posts: {
  //         create: [
  //           {
  //             title: 'Follow Prisma on Twitter',
  //             content: 'https://twitter.com/prisma',
  //             published: true,
  //           },
  //           {
  //             title: 'Follow Nexus on Twitter',
  //             content: 'https://twitter.com/nexusgql',
  //             published: true,
  //           },
  //         ],
  //       },
  //     },
  //   })
  console.log({ categories });
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
