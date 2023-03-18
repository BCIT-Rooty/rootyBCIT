-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "userId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" STRING,
    "lastName" STRING,
    "password" STRING NOT NULL,
    "image" STRING DEFAULT '/icon.png',
    "status" STRING DEFAULT 'available',
    "email" STRING NOT NULL,
    "aboutMe" STRING,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "program" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Post" (
    "postId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL DEFAULT '',
    "barterInformation" STRING DEFAULT '',
    "isNegotiableActive" BOOL DEFAULT false,
    "authorId" STRING NOT NULL,
    "categoryId" STRING NOT NULL,
    "price" INT4 DEFAULT 0,
    "rating" INT4 DEFAULT 0,
    "count" INT4 DEFAULT 0,
    "image" STRING DEFAULT '',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "favoriteId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" STRING NOT NULL,
    "postId" STRING NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("favoriteId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "skillId" STRING NOT NULL,
    "skillName" STRING NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("skillId")
);

-- CreateTable
CREATE TABLE "SkillOnUser" (
    "skillOnUserId" STRING NOT NULL,
    "sKillId" STRING NOT NULL,
    "userid" STRING NOT NULL,

    CONSTRAINT "SkillOnUser_pkey" PRIMARY KEY ("skillOnUserId")
);

-- CreateTable
CREATE TABLE "Photo" (
    "photoId" STRING NOT NULL,
    "postPhotoUrl" STRING NOT NULL,
    "postId" STRING,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("photoId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" STRING NOT NULL,
    "categoryName" STRING,
    "image" STRING DEFAULT '',

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Keywords" (
    "keywordId" INT4 NOT NULL DEFAULT unique_rowid(),
    "keyword" STRING NOT NULL,

    CONSTRAINT "Keywords_pkey" PRIMARY KEY ("keywordId")
);

-- CreateTable
CREATE TABLE "PostOnKeywords" (
    "postOnKeywordId" INT4 NOT NULL DEFAULT unique_rowid(),
    "postId" STRING NOT NULL,
    "keywordId" INT4 NOT NULL,

    CONSTRAINT "PostOnKeywords_pkey" PRIMARY KEY ("postOnKeywordId")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "chatRoomId" STRING NOT NULL,
    "userOneId" STRING NOT NULL,
    "userTwoId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "postId" STRING NOT NULL,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("chatRoomId")
);

-- CreateTable
CREATE TABLE "Message" (
    "messageId" STRING NOT NULL,
    "content" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isItText" BOOL DEFAULT true,
    "userId" STRING NOT NULL,
    "chatRoomId" STRING NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("messageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_skillName_key" ON "Skill"("skillName");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryName_key" ON "Category"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "Keywords_keyword_key" ON "Keywords"("keyword");

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_userOneId_userTwoId_key" ON "ChatRoom"("userOneId", "userTwoId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillOnUser" ADD CONSTRAINT "SkillOnUser_sKillId_fkey" FOREIGN KEY ("sKillId") REFERENCES "Skill"("skillId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillOnUser" ADD CONSTRAINT "SkillOnUser_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("postId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostOnKeywords" ADD CONSTRAINT "PostOnKeywords_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostOnKeywords" ADD CONSTRAINT "PostOnKeywords_keywordId_fkey" FOREIGN KEY ("keywordId") REFERENCES "Keywords"("keywordId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_userOneId_fkey" FOREIGN KEY ("userOneId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_userTwoId_fkey" FOREIGN KEY ("userTwoId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("chatRoomId") ON DELETE RESTRICT ON UPDATE CASCADE;
