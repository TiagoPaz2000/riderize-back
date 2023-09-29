-- CreateTable
CREATE TABLE "Rides" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "start_date_registration" TIMESTAMP(3) NOT NULL,
    "end_date_registration" TIMESTAMP(3) NOT NULL,
    "additional_registration" TEXT,
    "start_place" TEXT NOT NULL,
    "participants_limit" INTEGER,

    CONSTRAINT "Rides_pkey" PRIMARY KEY ("id")
);
