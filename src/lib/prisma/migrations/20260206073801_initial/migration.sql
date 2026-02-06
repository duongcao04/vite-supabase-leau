-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('DATA_SHEET', 'IOM_MANUAL', 'CAD_MODEL', 'VIDEO');

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "sizeRange" TEXT,
    "connectionType" TEXT[],
    "frequency" INTEGER,
    "performance" TEXT[],
    "brandId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT[],
    "benefits" TEXT[],
    "applications" TEXT NOT NULL DEFAULT 'Water pipeline',
    "certifications" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "SKU" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "images" TEXT[],
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepairKit" (
    "id" TEXT NOT NULL,
    "kitCode" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "includes" TEXT NOT NULL DEFAULT 'Necessary seals and guides',
    "productId" TEXT NOT NULL,

    CONSTRAINT "RepairKit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CADModel" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileFormat" TEXT NOT NULL DEFAULT '3D CAD',
    "size" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "CADModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "embedFrame" TEXT,
    "fileSize" TEXT,
    "resourceType" "ResourceType" NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_productCode_key" ON "Product"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_SKU_key" ON "ProductVariant"("SKU");

-- CreateIndex
CREATE UNIQUE INDEX "RepairKit_kitCode_key" ON "RepairKit"("kitCode");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairKit" ADD CONSTRAINT "RepairKit_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CADModel" ADD CONSTRAINT "CADModel_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
