import { localStorageWrapper } from '../helpers'
import { isLogged } from './loginService'

const NAMESPACE = 'user_profile'

const userprofileService = {
  insert: (recipeSlug, comment) => {
    if (!isLogged) {
      throw new Error('User not logged')
    }

    const userProfile = localStorageWrapper.get(NAMESPACE) || {}
    userProfile[recipeSlug] = (userProfile[recipeSlug] || []).concat({
      ...comment,
      nome: 'altor',
      email: 'email@teste.com',
      endereco: 'rua visconde de souza',
      telefone: '00 00000000',
      cidade: 'São Paulo',
      estado: 'SP',
      date: +new Date()
    })

    localStorageWrapper.set(NAMESPACE, userProfile)
    return true
  },
  get: (recipeSlug) => (localStorageWrapper.get(NAMESPACE) || {})[recipeSlug] || [],

  delete: (recipeSlug, target) => {
    if (!isLogged) {
      throw new Error('User not logged')
    }

    const userProfile = localStorageWrapper.get(NAMESPACE) || {}
    userProfile[recipeSlug] = (userProfile[recipeSlug] || []).filter(comment => target.date !== comment.date)
    localStorageWrapper.set(NAMESPACE, userProfile)
    return true
  }
}

export default userprofileService
