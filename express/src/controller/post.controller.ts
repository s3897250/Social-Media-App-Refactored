const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import express, { Request, Response } from 'express';


exports.create = async (req: Request, res: Response) => {
  const result = await prisma.product.create({
    data: {
      user: parseInt(req.params.id)
    }
  });

  res.json(result)
}


