import React, { useEffect, useState } from "react";
import getData from "../apis/Apis";
import DataListItem from "./DataListItem";
import Loader from "./Loader";


interface State {
    isLoading: boolean,
    data: object
}


const DataList = () => {

    const [state, setState] = useState({ isLoading: true, data: {}});

    useEffect(() => {
        getData()
        .then((res : any) => {
            setState({
                isLoading: false,
                data : res
            });
        })
    }, [])

    return (
        <>
            {state.isLoading ? <Loader /> : <DataListItems dataList={state.data} />}
        </>
    )
}


interface DataList {
    dataList: object[]
}

const DataListItems = ({ dataList } : any) => {
    return (<ul className="divide-y divide-gray-200">
        {dataList.map((obj: object, index: number) => {
            return (<DataListItem obj={obj} key={index} />)
        })}
    </ul>)
}

export default DataList;