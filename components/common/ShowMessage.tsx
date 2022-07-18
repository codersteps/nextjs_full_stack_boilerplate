import { useStore } from '@/store/index'

const ShowMessage = () => {
  const { helloWorld } = useStore()

  return (
    <div className="p-4 border border-gray-500">
      Message: {helloWorld.message}
    </div>
  )
}

export default ShowMessage
