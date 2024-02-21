import { BranchManager } from './branchManager.model';

const getAllBranchManagerIntoDB = async () => {
  const result = await BranchManager.find();
  return result;
};

export const BranchManagerServices = {
  getAllBranchManagerIntoDB,
};
