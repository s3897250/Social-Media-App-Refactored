/*
  Warnings:

  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `product_category` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `product_description` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `product_group` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `product_image` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `sub_category` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `supermarket_id` on the `product` table. All the data in the column will be lost.
  - Added the required column `user` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `product_category`,
    DROP COLUMN `product_description`,
    DROP COLUMN `product_group`,
    DROP COLUMN `product_image`,
    DROP COLUMN `sub_category`,
    DROP COLUMN `supermarket_id`,
    ADD COLUMN `user` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user`);
