import useFetch from 'fetch-suspense'

export const useFetchSuspense = (url) => {
    const response = useFetch(url)
    return response
}