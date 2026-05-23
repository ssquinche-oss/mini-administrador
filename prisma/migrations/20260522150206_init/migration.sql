-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Prioridad" TEXT NOT NULL,
    "Completar" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
