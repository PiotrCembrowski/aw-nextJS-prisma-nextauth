-- AlterTable
ALTER TABLE "User" ADD COLUMN     "authProviderId" TEXT,
ADD COLUMN     "img" TEXT,
ALTER COLUMN "password" DROP NOT NULL;
