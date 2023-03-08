import { Route, Routes } from 'react-router-dom';
import DataList from './DataList';
import Details from './Details';
import Variable from './Variable';

const InfoContainer = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<DataList />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/variable/:dollar/:x/:id' element={<Variable />} />
            </Routes>
        </>
    )
}

export default InfoContainer;