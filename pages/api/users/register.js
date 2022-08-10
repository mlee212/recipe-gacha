const bcrypt = require('bcryptjs');

import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: register
});

async function register(req, res) {
    // split out password from user details 
    const { password, ...user } = req.body;

    // validate
    if (await usersRepo.find(x => x.username === user.username)){
        
        throw `User with the username "${user.username}" already exists`;
    }
    // hash password
    user.hash = bcrypt.hashSync(password, 10);    

    await usersRepo.create(user);
    return res.status(200).json({});
}