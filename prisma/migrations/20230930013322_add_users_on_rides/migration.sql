-- CreateTable
CREATE TABLE "UsersOnRides" (
    "userId" TEXT NOT NULL,
    "ridesId" TEXT NOT NULL,

    CONSTRAINT "UsersOnRides_pkey" PRIMARY KEY ("userId","ridesId")
);

-- AddForeignKey
ALTER TABLE "UsersOnRides" ADD CONSTRAINT "UsersOnRides_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnRides" ADD CONSTRAINT "UsersOnRides_ridesId_fkey" FOREIGN KEY ("ridesId") REFERENCES "Rides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
