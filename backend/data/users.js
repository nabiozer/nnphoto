
import bcrypt from 'bcryptjs';
const users =
[
{
    name: 'nnphotofilm',
    email: 'ozer.nabi1@gmail.com',
    password: bcrypt.hashSync('05373696018.nabi',10),
    isAdmin: true,

}
]

export default users;







