const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Creates product
exports.createProduct = async (name : string) => {
  const product = await prisma.product.create({
    data: {
      user: name
    }
  });
  console.log(product);
}