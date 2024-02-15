import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Request, Response } from 'express';

// Select all replies of a post.
exports.allReplies = async (req: Request, res: Response) => {
    const replies = await prisma.reply.findMany({
        where: {
            postId: req.body.id
        },
        include: {
            Post: true
        }
    });

    res.json(replies);
};

// Create a reply from a post.
exports.createReply = async (req: Request, res: Response) => {
    const replyobj = await prisma.reply.create({
        data: {
            reply_id: req.body.reply_id,
            reply_body: req.body.reply,
            user: req.body.user,
            date: req.body.date
        }
    });

    res.json(replyobj);
};
