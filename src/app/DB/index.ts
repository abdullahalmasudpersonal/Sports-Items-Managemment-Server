import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { User } from '../modules/user/user.model';

const superUser = {
  userId: '0001',
  username:'abdullah',
  name:{
    firstName:'Abdullah',
    middleName:'Al',
    lastName:'Masud'
  },
  email: 'abdullah@gmail.com',
  password: config.super_admin_password,
  role: USER_ROLE.superAdmin,
  gender:'male',
  contactNo:'01726457771',
  profileImg:'sdjflk;j',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  /// when database is connected , we will check is there ay user who is super admin
  const isSuerAdminExists = await User.findOne({ role: USER_ROLE.superAdmin });

  if (!isSuerAdminExists) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
