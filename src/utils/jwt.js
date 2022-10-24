import jwtDecode from 'jwt-decode'
import { session } from '.'
// ---------s------------------------------------------------------------

const getIdByToken = accessToken => {
  const { id } = jwtDecode(accessToken)
  if (!id) return false
  return id
}

const setSession = accessToken => {
  if (accessToken) {
    session.storeData('jwt', accessToken)
    return jwtDecode(accessToken)
  }
  return session.removeData('jwt')
}

export default { setSession, getIdByToken }
