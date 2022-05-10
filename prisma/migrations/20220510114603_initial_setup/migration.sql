-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "first" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "second" TEXT NOT NULL,
    "transl" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
