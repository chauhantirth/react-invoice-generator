declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

interface JVars {
  route: string
}

type JState = {
  currentRoute: string
}
  
type actionType = {
  type: string
  payload: any
}

type DispatchType = (args: actionType) => actionType