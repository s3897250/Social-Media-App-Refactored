// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// import { Request, Response } from 'express';

// // Creates reaction
// exports.createReactions = async (req: Request, res: Response) => {
//     const reactionsObj = await prisma.reactions.create({
//         data: {
//             reactions_id: req.body.reactions_id,
//         }
//     });

//     res.json(reactionsObj);
// };

// // Update reactions
// exports.updateReactions = async (req: Request, res: Response) => {
//     const updatedReactionsObj = await prisma.reactions.update({
//         where: {
//             reactions_id: req.body.id     // Search based on id of post
//         },
//         data: {
//             liked: req.body.liked,
//             disliked: req.body.disliked,
//             likeCount: req.body.likeCount,
//             peopleWhoHaveLiked: req.body.peopleWhoHaveLiked,
//             peopleWhoHaveDisliked: req.body.peopleWhoHaveDisliked
//         }
//     });

//     res.json(updatedReactionsObj);
// };4

// // Gets reactions
// exports.getReactions = async (req: Request, res: Response) => {
//     const reactionsObj = await prisma.reactions.findUnique({
//         where: {
//             id: req.params.id
//         }
//     });

//     res.json(reactionsObj);
// };
