import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Request, Response } from 'express';

// Creates a comment from a post.
exports.createComment = async (req: Request, res: Response) => {
    const commentobj = await prisma.comment.create({
        data: {
            comment_id: req.body.comment_id,
            comment_body: req.body.comment_body,
            user: req.body.user,
        }
    });

    res.json(commentobj);
};

// Gets comments from a reply.
exports.getComments = async (req: Request, res: Response) => {
    const commentobjs = await prisma.comment.findMany({
        where: {
            replyReply_id: req.body.reply_id
        }
    });

    res.json(commentobjs);
};
