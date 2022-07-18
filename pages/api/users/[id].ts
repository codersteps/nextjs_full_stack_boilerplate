import makeHandler from '@/core/make-handler'
import showHandler from '@/app/users/show.handler'
import updateHandler from '@/app/users/update.handler'
import deleteHandler from '@/app/users/delete.handler'

export default makeHandler([
  {
    method: 'GET',
    handler: showHandler,
  },
  {
    method: 'PUT',
    handler: updateHandler,
  },
  {
    method: 'DELETE',
    handler: deleteHandler,
  },
])
