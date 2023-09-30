/*
  Warnings:

  - The primary key for the `UsersOnRides` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ridesId` on the `UsersOnRides` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UsersOnRides` table. All the data in the column will be lost.
  - Added the required column `ride_id` to the `UsersOnRides` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_date` to the `UsersOnRides` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UsersOnRides` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UsersOnRides" DROP CONSTRAINT "UsersOnRides_ridesId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnRides" DROP CONSTRAINT "UsersOnRides_userId_fkey";

-- AlterTable
ALTER TABLE "UsersOnRides" DROP CONSTRAINT "UsersOnRides_pkey",
DROP COLUMN "ridesId",
DROP COLUMN "userId",
ADD COLUMN     "ride_id" TEXT NOT NULL,
ADD COLUMN     "subscription_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "UsersOnRides_pkey" PRIMARY KEY ("user_id", "ride_id");

-- AddForeignKey
ALTER TABLE "UsersOnRides" ADD CONSTRAINT "UsersOnRides_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnRides" ADD CONSTRAINT "UsersOnRides_ride_id_fkey" FOREIGN KEY ("ride_id") REFERENCES "Rides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
