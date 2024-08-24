const readline = require('readline');
const bcrypt = require('bcryptjs');
const { initDB, User } = require('../lib/db');

async function createAdmin(username, password){
    const hashPWD = await bcrypt.hash(password, 10);
    return User.create({username, password: hashPWD});
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

async function  init() {
    await initDB();

    const userCount = await User.count();
    console.log('Count ' + userCount);
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

init().catch(err => console.error('Error initializing database:', err));