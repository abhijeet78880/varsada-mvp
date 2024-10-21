/*
  Warnings:

  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "isActive" SET DEFAULT true,
ALTER COLUMN "isVisible" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" SET NOT NULL;
