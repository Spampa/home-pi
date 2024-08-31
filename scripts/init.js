const { PrismaClient } = require('@prisma/client');
const readline = require('readline');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function  initDB() {
    //default roles
    const roles = [{ name: 'admin' }, { name: 'user' }];
    let id = 1;
    for (const role of roles){
        await prisma.role.upsert({
            where: {
                name: role.name
            },
            update: {},
            create: {
                id: id++,
                name: role.name
            }
        })
    }

    const types = [{ name: 'PC' }, { name: 'Microcontroller' }]
    id = 1;
    for (const type of types){
        await prisma.deviceType.upsert({
            where: {
                name: type.name
            },
            update: {},
            create: {
                id: id++,
                name: type.name
            }
        })
    }
}

async function createAdmin(username, password){
    const hashPWD = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data: {
            username,
            password: hashPWD,
            roleId: 1
        }
    })
}

async function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}


async function main() {
    await initDB();

    const userCount = await prisma.user.count();

    if(userCount === 0){
        console.log("Welcome to PiHome by Spampa \nCreate admin user");
        const username = await askQuestion('Enter admin username: ');
        const password = await askQuestion('Enter admin password: ');

        await createAdmin(username, password);
        console.log('Admin user created successfully! \nServer now will start...');
    }
    else{
        console.log("Home Pi will start...")
    }
}

main().catch(err => console.error('Error initializing database:', err));