import { UserRoles, } from '@/shared/constants/userRoles'


export type UserRoleType = UserRoles

export type UUID = string

export type FileData = {
  upload_id: number,
  name: string,
  fullPath: string,
}

export type AllFileTypes = FileData | FileData[] | File | File[] | FileList
