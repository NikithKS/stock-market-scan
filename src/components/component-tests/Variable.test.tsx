import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { VariableBody } from '../Variable';


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));



const data1 = { "type": "value", "values": [100, 200] };
const data2 = { "type": "indicator", "study_type": "cci", "parameter_name": "period", "min_value": 1, "max_value": 99, "default_value": 20 };

test('ValueList should be displayed if given type is value', () => {
    render(<VariableBody vari={data1} />);

    const valueList = screen.getByTestId("data-id-value-list");
    expect(valueList).toBeInTheDocument();
});



test('Indicator should be displayed if given type is indicator', () => {
    render(<VariableBody vari={data2} />);

    const indicator = screen.getByTestId("data-id-indicator");
    expect(indicator).toBeInTheDocument();
});


test('Indicator name should be displayed', () => {
    render(<VariableBody vari={data2} />);

    const titleEle = screen.getByText(data2.parameter_name);
    expect(titleEle).toBeInTheDocument();
});



