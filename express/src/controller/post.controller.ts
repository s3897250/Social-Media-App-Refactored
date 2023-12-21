const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import express, { Request, Response } from 'express';


exports.create = async (req: Request, res: Response) => {

  const result = await prisma.post.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
      userUser_id: req.body.userId
    }
  });

  res.json(result)
}


