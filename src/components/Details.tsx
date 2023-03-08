import { useParams } from "react-router-dom";

const Details = () => {

    const {id} = useParams();

    return (
        <>
        {id}
        </>
    )
}

export default Details;