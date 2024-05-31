export const Spinner = ({ isLoading }: { isLoading: boolean }) => {
    if (isLoading)
        return <div className="flex items-center space-x-2">
            <span className="text-2xl font-medium text-white">Loading...</span>
        </div>
    return null
}