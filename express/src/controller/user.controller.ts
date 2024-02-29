import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Function to safely serialize JSON including BigInt values
function safeJsonStringify(data: any) {
  return JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value // convert BigInt to string
  );
}

// Creates user
exports.createUser = async (req: Request, res: Response) => {

  // console.log(req)

  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_joined: req.body.date_joined,
      followers: req.body.followers,
      following: req.body.following,
      blocked: req.body.blocked || false
    }
  });

  // Generate JWT token
  const token = jwt.sign(
    { email: user.email },
    "process.env.JWT_SECRET",
    { expiresIn: '24h' }
  );

  // Serialize the response with safeJsonStringify to handle BigInt
  const serializedResponse = safeJsonStringify({ user, token });

  // console.log(JSON.parse(serializedResponse))

  res.json(JSON.parse(serializedResponse))
}


// Find single user (by url param id)
exports.userLogin = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = req.body.password === user.password;

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email },
      "process.env.JWT_SECRET",
      { expiresIn: '24h' }
    );

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: 'Unsucessful retreival of user' });
  }
}


// Retrieves all users
exports.allUsers = async (req: Request, res: Response) => {
  const result = await prisma.user.findMany();

  res.json(result)
}


// Updates user
exports.updateUser = async (req: Request, res: Response) => {
  const result = await prisma.user.update({
    where: {
      user_id: req.body.id
    },
    data: {
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.body.profile_pic,
      date_joined: req.body.date_joined,
      followers: req.body.followers,
      following: req.body.following,
      blocked: req.body.blocked
    }
  })

  res.json(result)
}


// Deletes user
exports.updateUser = async (req: Request, res: Response) => {
  const result = await prisma.user.delete({
    where: {
      user_id: req.body.id,
    }
  })

  res.json(result)
}


