import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const argon2 = require("argon2");

// Responsible for seeding data
export async function prisma_seed() {

    let hashed_password: string = "abc123"
    // let hashed_password = await argon2.hash(password, { type: argon2.argonid })


    // // Delete existing users
    await prisma.user.deleteMany({});


    // // Creation of multiple data instances
    // for (let i = 0; i < 5; i++) {

    //     // User objects
    //     await prisma.user.create({
    //         data: {
    //             username: 'testingrecord',
    //             password_hash: hashed_password,
    //             first_name: 'Testing',
    //             last_name: 'Record',
    //             profile_pic: 'profile_pic_url',
    //             date_joined: new Date().toISOString(),
    //             followers: JSON.stringify([]),
    //             following: JSON.stringify([]),
    //             blocked: false
    //         }
    //     })
    // }
}
