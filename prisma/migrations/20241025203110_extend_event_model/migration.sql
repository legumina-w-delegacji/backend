/*
  Warnings:

  - Added the required column `description` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;
