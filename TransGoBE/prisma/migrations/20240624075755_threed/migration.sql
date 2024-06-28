/*
  Warnings:

  - A unique constraint covering the columns `[busId,seatNumber,travelDate]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seatNumber` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `Ticket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "seatNumber" INTEGER NOT NULL,
ADD COLUMN     "travelDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_busId_seatNumber_travelDate_key" ON "Ticket"("busId", "seatNumber", "travelDate");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
