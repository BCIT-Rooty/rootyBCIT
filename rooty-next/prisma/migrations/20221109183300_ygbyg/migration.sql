-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "aboutMe" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Post" (
    "postId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "barterInformation" TEXT DEFAULT '',
    "isNegotiableActive" BOOLEAN DEFAULT false,
    "authorId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "price" INTEGER DEFAULT 0,
    "rating" INTEGER DEFAULT 0,
    "count" INTEGER DEFAULT 0,
    "image" TEXT DEFAULT '',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "Program" (
    "programId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "programName" VARCHAR(50) NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("programId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "skillId" SERIAL NOT NULL,
    "skillName" VARCHAR(30) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("skillId")
);

-- CreateTable
CREATE TABLE "SkillOnUser" (
    "skillOnUserId" SERIAL NOT NULL,
    "sKillId" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "SkillOnUser_pkey" PRIMARY KEY ("skillOnUserId")
);

-- CreateTable
CREATE TABLE "Photo" (
    "photoId" SERIAL NOT NULL,
    "postPhotoUrl" TEXT NOT NULL,
    "postId" INTEGER,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("photoId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Keywords" (
    "keywordId" SERIAL NOT NULL,
    "keyword" TEXT NOT NULL,

    CONSTRAINT "Keywords_pkey" PRIMARY KEY ("keywordId")
);

-- CreateTable
CREATE TABLE "PostOnKeywords" (
    "postOnKeywordId" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "keywordId" INTEGER NOT NULL,

    CONSTRAINT "PostOnKeywords_pkey" PRIMARY KEY ("postOnKeywordId")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "chatRoomId" SERIAL NOT NULL,
    "userOneId" INTEGER NOT NULL,
    "userTwoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" INTEGER,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("chatRoomId")
);

-- CreateTable
CREATE TABLE "Message" (
    "messageId" SERIAL NOT NULL,
    "content" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "chatRoomId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("messageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Program_authorId_key" ON "Program"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_skillName_key" ON "Skill"("skillName");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryName_key" ON "Category"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "Keywords_keyword_key" ON "Keywords"("keyword");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("postId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("chatRoomId") ON DELETE RESTRICT ON UPDATE CASCADE;
