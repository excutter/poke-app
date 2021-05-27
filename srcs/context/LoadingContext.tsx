import React, { 
    FC,
    createContext,
    useState 
} from 'react'

export const LoadingContext = createContext(false),
    LoadingUpdateContext = createContext(() => {})

const LoadingProvider: FC = ({ children }) => {

    const [loading, setLoading] = useState(false)

    const toggleLoading = () => setLoading(prevLoading => !prevLoading)

    return <LoadingContext.Provider value={loading}>
        <LoadingUpdateContext.Provider value={toggleLoading}>
            {children}
        </LoadingUpdateContext.Provider>
    </LoadingContext.Provider>
}

export default LoadingProvider
