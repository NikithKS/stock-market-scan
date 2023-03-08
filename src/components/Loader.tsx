const Loader = () => {

    return (
        <div id="loader">
            <div className="flex justify-center items-center gap-3">
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
            </div>
        </div>
    )
}

const LoaderDot = () => {
    return (
        <span className="flex relative h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
        </span>
    )
}


export default Loader;