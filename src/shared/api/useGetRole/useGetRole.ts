import { UserRoles, } from '@/shared/constants/userRoles'
import { UserRoleType } from '@/entities/userRole/model/userRoleTypes'
import { useAppSelector } from '@/shared/redux/hooks'


const isUserRole = ((role: null | UserRoleType): role is UserRoleType => role !== null)


const useGetRole = (): UserRoleType => {
  const defaultRole = useAppSelector(state => state.auth.userType)
  const choosenRole = useAppSelector(state => state.auth.choosenRole)


  if (isUserRole(choosenRole)) {
    return choosenRole
  } else if (isUserRole(defaultRole)) {
    return defaultRole
  } return UserRoles.UNKNOWN
}


export default useGetRole


// TEST MOCK DATA
export const useGetRoleTest = () => {
  let mockData;
  let role = 'admin';

  if (role === 'admin') {
    mockData = {
      role: 'admin',
    };
  } else if (role === 'student') {
    mockData = {
      role: 'student',
    };
  } else {
    // Default mock data if no valid role is provided
    mockData = {
      role: 'unknown',
    };
  }

  const getRole = async (variables: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockData,
        });
      }, 500);
    });
  };

  return {
    getRole,
    data: mockData,
    loading: false,
    error: null,
  };
};

