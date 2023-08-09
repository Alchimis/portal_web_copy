export type AuthorizationAction = ChangeEmailAction | ChangePasswordAction

export enum AuthorizationActionTypes {
    CHANGE_EMAIL,
    CHANGE_PASSWORD
}

export interface ChangeEmailAction {
    readonly type: AuthorizationActionTypes.CHANGE_EMAIL
    readonly email: string
}

export interface ChangePasswordAction {
    readonly type: AuthorizationActionTypes.CHANGE_PASSWORD
    readonly password: string
}
