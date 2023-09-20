/**
 * Check the permission
 * @param loginUser
 * Current Login user
 * @param needAccess
 * Required permission
 * @return boolean
 * Have permission or not
 */
import accessEnum from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = accessEnum.DEFAULT) => {
  const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;
  // Pages that need not any permission
  if (needAccess === accessEnum.DEFAULT) {
    return true;
  }
  // Pages that need the permission as the not login user
  if (needAccess === accessEnum.NOT_LOGIN) {
    if (loginUserAccess !== accessEnum.NOT_LOGIN) {
      return false;
    }
  }
  // Pages that need the permission as the login user
  if (needAccess === accessEnum.USER) {
    // User is not login
    if (loginUserAccess === accessEnum.NOT_LOGIN) {
      return false;
    }
  }
  // Pages that need the permission as the admin
  if (needAccess === accessEnum.ADMIN) {
    // User is not admin
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
