export type EmployeeNewAction =
  | ChangeFirstNameAction
  | ChangeLastNameAction
  | ChangePatronymicAction
  | ChangeDateOfBirthAction
  | ChangeEmailAction
  | ChangePasswordAction
  | ChangeDepartmentAction
  | ChangeRoleAction
  | ChangeRightAction
  | CreateAction;

export enum EmployeeNewActionTypes {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PATRONYMIC,
  CHANGE_DATE_OF_BIRTH,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SELECT_DEPARTMENT,
  SELECT_ROLE,
  SELECT_RIGHT,
  CREATE,
}

export interface ChangeFirstNameAction {
  readonly type: EmployeeNewActionTypes.CHANGE_FIRST_NAME;
  readonly firstName: string;
}

export interface ChangeLastNameAction {
  readonly type: EmployeeNewActionTypes.CHANGE_LAST_NAME;
  readonly lastName: string;
}

export interface ChangePatronymicAction {
  readonly type: EmployeeNewActionTypes.CHANGE_PATRONYMIC;
  readonly patronymic: string;
}

export interface ChangeDateOfBirthAction {
  readonly type: EmployeeNewActionTypes.CHANGE_DATE_OF_BIRTH;
  readonly dateOfBirth: string;
}

export interface ChangeEmailAction {
  readonly type: EmployeeNewActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePasswordAction {
  readonly type: EmployeeNewActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

export interface ChangeDepartmentAction {
  readonly type: EmployeeNewActionTypes.SELECT_DEPARTMENT;
  readonly departmentId: string;
}

export interface ChangeRoleAction {
  readonly type: EmployeeNewActionTypes.SELECT_ROLE;
  readonly roleId: string;
}

export interface ChangeRightAction {
  readonly type: EmployeeNewActionTypes.SELECT_RIGHT;
  readonly rightId: string;
}

export interface CreateAction {
  readonly type: EmployeeNewActionTypes.CREATE;
}
