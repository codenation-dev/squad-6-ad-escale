import { localStorageWrapper } from '../helpers'
import { isLogged, getUser } from './loginService'

const NAMESPACE = 'user_profile'

const userprofileService = {
    insert: (recipeSlug, comment) => {
        if (!isLogged) {
            throw new Error('User not logged')
        }

        const user_profile = localStorageWrapper.get(NAMESPACE) || {}
        user_profile[recipeSlug] = (user_profile[recipeSlug] || []).concat({
            ...comment,
            nome: 'altor',
            email: 'email@teste.com',
            endereco: 'rua visconde de souza',
            telefone: '00 00000000',
            cidade: 'São Paulo',
            estado: 'SP',
            date: +new Date()
        })

        localStorageWrapper.set(NAMESPACE, user_profile)
        return true
    },
    get: (recipeSlug) => (localStorageWrapper.get(NAMESPACE) || {})[recipeSlug] || [],

    delete: (recipeSlug, target) => {
        if (!isLogged) {
            throw new Error('User not logged')
        }

        const user_profile = localStorageWrapper.get(NAMESPACE) || {}
        user_profile[recipeSlug] = (user_profile[recipeSlug] || []).filter(comment => target.date !== comment.date)
        localStorageWrapper.set(NAMESPACE, user_profile)
        return true
    }
}

export default userprofileService