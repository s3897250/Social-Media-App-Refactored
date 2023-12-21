/*
  Warnings:

  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `product`;

-- CreateTable
CREATE TABLE `User` (
    `user_id` BIGINT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(32) NULL,
    `password_hash` VARCHAR(96) NOT NULL,
    `first_name` VARCHAR(40) NOT NULL,
    `last_name` VARCHAR(40) NOT NULL,
    `profile_pic` VARCHAR(191) NULL DEFAULT 'none',
    `date_joined` VARCHAR(191) NULL DEFAULT 'none',
    `followers` VARCHAR(191) NULL DEFAULT '[]',
    `following` VARCHAR(191) NULL DEFAULT '[]',
    `blocked` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(144) NULL,
    `body` VARCHAR(144) NULL,
    `image` VARCHAR(144) NULL,
    `userUser_id` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reply` (
    `reply_id` BIGINT NOT NULL AUTO_INCREMENT,
    `reply_body` VARCHAR(191) NULL,
    `user` VARCHAR(191) NULL,
    `date` VARCHAR(191) NULL,
    `postId` BIGINT NULL,

    PRIMARY KEY (`reply_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `comment_id` BIGINT NOT NULL AUTO_INCREMENT,
    `comment_body` VARCHAR(191) NULL,
    `user` VARCHAR(191) NULL,
    `replyReply_id` BIGINT NULL,

    PRIMARY KEY (`comment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reactions` (
    `reactions_id` BIGINT NOT NULL AUTO_INCREMENT,
    `liked` BOOLEAN NOT NULL DEFAULT false,
    `disliked` BOOLEAN NOT NULL DEFAULT false,
    `likeCount` INTEGER NOT NULL DEFAULT 0,
    `peopleWhoHaveLiked` VARCHAR(191) NULL DEFAULT '[]',
    `peopleWhoHaveDisliked` VARCHAR(191) NULL DEFAULT '[]',
    `commentComment_id` BIGINT NULL,

    PRIMARY KEY (`reactions_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userUser_id_fkey` FOREIGN KEY (`userUser_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_replyReply_id_fkey` FOREIGN KEY (`replyReply_id`) REFERENCES `Reply`(`reply_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reactions` ADD CONSTRAINT `Reactions_commentComment_id_fkey` FOREIGN KEY (`commentComment_id`) REFERENCES `Comment`(`comment_id`) ON DELETE SET NULL ON UPDATE CASCADE;
