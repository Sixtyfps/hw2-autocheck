import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return action.payload === 'up' ?
                [
                    ...state
                ].sort((a,b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })// need to fix
                :
                [
                    ...state
                ].sort((a,b) => {
                    if (b.name < a.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })// need t

        }
        case 'check': {
            return [
                ...state
            ].filter(el => el.age>=18)
        }
        default:
            return state
    }
}
