/*
  Warnings:

  - You are about to drop the column `password_hash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `password_hash`,
    DROP COLUMN `username`,
    ADD COLUMN `email` VARCHAR(32) NULL,
    ADD COLUMN `password` VARCHAR(96) NOT NULL;
