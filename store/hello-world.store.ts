import { makeAutoObservable } from 'mobx'

type Store = {
  message: string
  setMessage(message: string): void
}

const helloWorldStore = makeAutoObservable<Store>({
  message: '',
  setMessage(message) {
    this.message = message
  },
})

export default helloWorldStore
