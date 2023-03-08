import { Route, Routes } from 'react-router-dom';
import DataList from './DataList';
import Details from './Details';

const InfoContainer = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<DataList />} />
                <Route path='/details/:id' element={<Details />} />
            </Routes>
        </>
    )
}

export default InfoContainer;