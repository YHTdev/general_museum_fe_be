/*
  Warnings:

  - Added the required column `no` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `language` VARCHAR(191) NOT NULL DEFAULT 'my';

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `cover` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Page` ADD COLUMN `no` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Setting` MODIFY `logo` LONGTEXT NULL;

-- CreateTable
CREATE TABLE `Service` (
    `id` VARCHAR(191) NOT NULL,
    `src` LONGTEXT NOT NULL,
    `title` VARCHAR(191) NULL,
    `subTitle` VARCHAR(191) NULL,
    `settingId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Slider` (
    `id` VARCHAR(191) NOT NULL,
    `src` LONGTEXT NOT NULL,
    `settingId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_settingId_fkey` FOREIGN KEY (`settingId`) REFERENCES `Setting`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Slider` ADD CONSTRAINT `Slider_settingId_fkey` FOREIGN KEY (`settingId`) REFERENCES `Setting`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
