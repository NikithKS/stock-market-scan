const DataListItem = ({ obj }: any) => {

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
            <li>
                <a className="block hover:bg-gray-50" href={`/details/${obj.id}`}>
                    <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                            <div className="truncate">
                                <div className="flex">
                                    <p className="truncate font-medium text-indigo-600">{obj.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-16 flex flex-shrink-0">
                            <p className={`${obj.color === 'green' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} "inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>{obj.tag}</p>
                        </div>
                        <div className="ml-5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        </div>

    )
}

export default DataListItem;