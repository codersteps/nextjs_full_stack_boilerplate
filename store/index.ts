import { createContext, useContext } from 'react'
import helloWorldStore from './hello-world.store'

const store = {
  helloWorld: helloWorldStore,
}

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext(StoreContext)
}

export default store
