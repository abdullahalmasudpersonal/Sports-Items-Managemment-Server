import { User } from './user.model';

const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      userId: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastAdmin?.userId ? lastAdmin.userId.substring(2) : undefined;
};

export const generateAdminId = async () => {
  const currentId = (await findLastAdminId()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `A-${incrementId}`;
  return incrementId;
};

const findLastSalesManId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'salesMan',
    },
    {
      userId: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastAdmin?.userId ? lastAdmin.userId.substring(2) : undefined;
};

export const generateSalesManId = async () => {
  const currentId = (await findLastSalesManId()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `S-${incrementId}`;
  return incrementId;
};
