import { useContext } from 'react'

import { LoadingContext, LoadingUpdateContext} from '../context/LoadingContext'

export const useLoading = () => useContext(LoadingContext)
export const useLoadingUpdate = () => useContext(LoadingUpdateContext)