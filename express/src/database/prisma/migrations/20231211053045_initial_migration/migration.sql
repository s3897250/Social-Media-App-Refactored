-- CreateTable
CREATE TABLE `product` (
    `price` DOUBLE NOT NULL,
    `id` BIGINT NOT NULL,
    `supermarket_id` BIGINT NULL,
    `name` VARCHAR(255) NULL,
    `product_category` VARCHAR(255) NULL,
    `product_description` VARCHAR(255) NULL,
    `product_group` VARCHAR(255) NULL,
    `product_image` VARCHAR(255) NULL,
    `sub_category` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
