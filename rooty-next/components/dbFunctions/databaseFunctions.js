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

  const author = await prisma.user.findUnique({
    where: {
      userId: 1,
    },
  });

  const post = await prisma.post.create({
    data: {
      title: title,
      categoryId: category.categoryId,
      // keywords: figure this out too
      description: description,
      barterInformation: isBarter,
      authorId: author.userId,
      price: parseInt(price),
      isNegotiableActive: isNegotiableActive,
      count: count,
    },
  });
  const photo = await prisma.photo.create({
    data: {
      userPhotoUrl: photoUrl,
      postId: post.postId,
    },
  });
  keywords.map(async (m) => {
    const keyword = await prisma.keywords.create({
      data: {
        keyword: m
      },
  })
    const PostOnKeywords = await prisma.PostOnKeywords.create({
      data: {
        postId: post.postId,
        keywordId: keyword.keywordId
      },
    });
    console.log(keyword, PostOnKeywords)
  })


}

export async function createPhoto(photoUrl) {
  const photo = await prisma.photo.create({
    data: {
      userPhotoUrl: photoUrl,
    },
  });
}
