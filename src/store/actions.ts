import {
    CHANGE_ROUTE
} from './types'

export function changeRoute(route: string) {
    const action: actionType = {
      type: CHANGE_ROUTE,
      payload:route,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: actionType) {
    return (dispatch: DispatchType) => {
       dispatch(action)
    }
}