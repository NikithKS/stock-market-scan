import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getData from "../apis/Apis";
import Loader from "./Loader";

const Details = () => {

    const [state, setState] = useState({ isLoading: true, data: null });
    const { id } = useParams();

    useEffect(() => {
        getData(id)
            .then((res: any) => {
                console.log(res);
                setState({
                    isLoading: false,
                    data: res
                });
            })
    }, []);

    return state.isLoading ? <Loader /> : <DetailsContainer data={state.data} data-id={id} />;
}

export default Details;



const DetailsContainer = (props: any) => {

    const navigate = useNavigate();

    return (
        <div>
            <button className="inline-flex gap-2 items-center my-3" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg>
                Go back
            </button>
            <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-4 w-4ull">
                <h3 className="text-2xl font-medium leading-6 text-gray-900">{props.data.name}</h3>
                <div className="mt-3 flex flex-shrink-0">
                    <p className={`${props.data.color === 'green' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} "inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>{props.data.tag}</p>
                </div>
                <hr className="w-full border-[0.1px] border-gray-200 mt-5" />
                <ul role="list" className="divide-y divide-gray-200">
                    {
                        props.data.criteria.map((crit: any, index: number) => <CretariaListItem crit={crit} data-id={props["data-id"]} index={index} key={index} />)
                    }
                </ul>
            </div>
        </div>
    )
}


const CretariaListItem = (props: any) => {

    
    switch (props.crit.type) {
        case 'plain_text':
            return (
                <li className="flex py-4">
                    <p className="font-medium text-gray-900">
                        {props.crit.text}
                    </p>
                </li>
            )
        case 'variable':
            let words = props.crit.text.split(" ");
            for (let i = 0; i < words.length; i++) {
                if (words[i].startsWith('$')) {
                    let vari = props.crit['variable'][words[i]];
                    console.log('yooooo', vari);
                    if (vari['type'] === 'value') {
                        words[i] = `<a href="/variable/${words[i]}/${props.index}/${props['data-id']}">${vari.values[0]}</a>`
                    } else if (vari['type'] === 'indicator') {
                        words[i] = `<a href="/variable/${words[i]}/${props.index}/${props['data-id']}">${vari.default_value}</a>`
                    }
                }
            }
            let str = words.join(' ');
            return (
                <li className="flex py-4">
                    <p className="font-medium text-gray-900 variable-text">
                        <span dangerouslySetInnerHTML={{__html: str}}></span>
                    </p>
                </li>
            )
            // return (<p className="font-medium text-gray-900 variable-text">
            //     <span dangerouslySetInnerHTML={{__html: str}}></span>
            // </p>)
        default:
            return (<></>)
    }
}