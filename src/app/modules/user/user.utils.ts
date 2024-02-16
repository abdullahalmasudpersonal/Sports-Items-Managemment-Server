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

const findLastSellerId = async () => {
  const lastSeller = await User.findOne(
    {
      role: 'seller',
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
  return lastSeller?.userId ? lastSeller.userId.substring(2) : undefined;
};

export const generateSellerId = async () => {
  const currentId = (await findLastSellerId()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `S-${incrementId}`;
  return incrementId;
};

const findLastBranchManagerId = async () => {
  const lastBranchManager = await User.findOne(
    {
      role: 'branchManager',
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
  return lastBranchManager?.userId
    ? lastBranchManager.userId.substring(2)
    : undefined;
};

export const generateBranchManagerId = async () => {
  const currentId = (await findLastBranchManagerId()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `B-${incrementId}`;
  return incrementId;
};
