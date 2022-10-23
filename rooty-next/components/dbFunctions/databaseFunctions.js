import { prisma } from "../../server/db/client";

export async function createPost({
  photoUrl,
  whatIsTheCategoryOfThisPost,
  keywords,
  title,
  description,
  isBarter,
  price,
  isNegotiableActive,
  count,
}) {
  const category = await prisma.category.findUnique({
    where: {
      categoryName: whatIsTheCategoryOfThisPost,
    },
  });

  console.log(category);

  const post = await prisma.post.create({
    data: {
      title: title,
      categoryId: category.categoryId,
      // keywords: figure this out too
      description: description,
      barterInformation: isBarter,
      price: parseInt(price),
      negotiable: isNegotiableActive,
      count: count,
    },
  });
  const photo = await prisma.photo.create({
    data: {
      userPhotoUrl: photoUrl,
      postId: post.postId,
    },
  });
}

export async function createPhoto(photoUrl) {
  const photo = await prisma.photo.create({
    data: {
      userPhotoUrl: photoUrl,
    },
  });
  console.log(photo);
}
