const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import express, { Request, Response } from 'express';


// Select all posts from the database.
exports.all = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany(); // Need to add include/nested fields set

  res.json(posts);
};

// Gets single post from database from its own post id
exports.postFromUser = async (req: Request, res: Response) => {
  const UserPost = await prisma.post.findUnique({
    where: {
      id: req.params.id
    },
    include: {
      User: true
    }
  });

  res.json(UserPost);
};

exports.postsFromUser = async (req: Request, res: Response) => {
  const UserPosts = await prisma.post.findMany({
    where: {
      userUser_id: req.params.id
    }
  });

  res.json(UserPosts);
};

// Create a post in the database.
exports.create = async (req: Request, res: Response) => {
  const post = await prisma.post.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
      userUser_id: req.body.user_id
    }
  });

  res.json(post);
};

exports.deletePost = async (req: Request, res: Response) => {
  const deletePost = await prisma.post.delete({
    where: {
      id: req.params.id
    }
  });

  res.json(deletePost);
};

exports.updatePost = async (req: Request, res: Response) => {
  const updatePost = await prisma.post.update({
    where: {
      id: req.body.id
    },
    data: {
      body: req.body.body
    }
  });

  res.json(updatePost);
};

