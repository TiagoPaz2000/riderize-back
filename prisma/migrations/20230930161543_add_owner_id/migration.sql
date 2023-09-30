/*
  Warnings:

  - Added the required column `owner_id` to the `Rides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rides" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rides" ADD CONSTRAINT "Rides_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
