import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getData from "../apis/Apis";
import Loader from "./Loader";

interface Params {
    vari: string,
    ind: string,
    id: string
}


const Variable = () => {

    const [state, setState] = useState({ isLoading: true, data: null });
    const navigate = useNavigate();

    const { vari, ind, id } = useParams();


    useEffect(() => {
        getData(id)
            .then((res: any) => {
                setState({
                    isLoading: false,
                    data: res
                });
            })
    }, []);

    return (
        <>
            {state.isLoading && Loader}
            {state.isLoading ||
                (<div>
                    <button className="inline-flex gap-2 items-center my-3" onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                        </svg>
                        Go back
                    </button>
                    <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-6 w-full">
                        <h3 className="text-2xl font-medium leading-6 text-gray-900">Variable params</h3>
                        <hr className="w-full border-[0.1px] border-gray-200 mt-5"></hr>
                        {state.data && ind && vari && <VariableBody vari={state.data["criteria"][ind]["variable"][vari]} />}
                    </div>
                </div>)
            }
        </>
    )
}

export default Variable;


const VariableBody = ({ vari }: any) => {

    console.log('yasv', vari);
    if (vari["type"] === "indicator") {
        return <Indicator vari={vari} />
    } else if (vari["type"] === "value") {
        return <ValueList values={vari["values"]} />
    }

    return <></>
}


const ValueList = ({ values }: any) => {

    values.sort((a: number, b: number) => a - b);
    console.log('yasv', values);
    return (

        <ul role="list" className="divide-y divide-gray-200">
            {values.map((val: any, index: number) =>
            (<li className="flex py-4" key={index}>
                <p className="font-medium text-gray-900">{val}</p>
            </li>)
            )}
        </ul>
    )
}


const Indicator = ({ vari }: any) => {

    return (
        <ul role="list" className="divide-y divide-gray-200">
            <div>
                <h3 className="text-lg font-medium leading-6 my-4 text-gray-900 uppercase">{vari['study_type']}</h3>
                <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">{vari['parameter_name']}</label>
                    <div className="mt-1.5">
                        <input type="tel" name="param_value" id="param_value" max={vari['max_value']} min={vari['min_value']} className="block w-full rounded-md border-[0.1px] border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2 py-3" placeholder="period value" value={vari['default_value']} />
                    </div>
                </div>
            </div>
        </ul>
    )
}