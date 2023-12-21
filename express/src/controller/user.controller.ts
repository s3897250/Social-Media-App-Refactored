import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Request, Response } from 'express';


// Creates user
exports.createUser = async (req: Request, res: Response) => {
  const result = await prisma.user.create({
    data: {
      username: req.body.username,
      password_hash: req.body.password_hash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.body.profile_pic || "none",
      date_joined: req.body.date_joined,
      followers: req.body.followers,
      following: req.body.following,
      blocked: req.body.blocked || false
    }
  });

  res.json(result)
}

// Find single user (by url param id)
exports.oneUser = async (req: Request, res: Response) => {
  const result = await prisma.user.findUnique({
    where: {
      user_id: parseInt(req.params.id)
    },
    include: {
      Post: true
    }
  })

  res.json(result)
}

// Retrieves all users
exports.allUsers = async (req: Request, res: Response) => {
  const result = await prisma.user.findMany();

  res.json(result)
}


