import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import DataListItem from '../DataListItem';
import { DetailsContainer } from '../Details';


const data = { "id": 1, "name": "Intraday buying seen in last 15 minutes", "tag": "Bullish", "color": "green", "criteria": [{ "type": "plain_text", "text": "Current candle open = current candle high" }, { "type": "plain_text", "text": "Previous candle open = previous candle high" }, { "type": "plain_text", "text": "2 previous candle’s open = 2 previous candle’s high" }] };
const data2 = { "id": 4, "name": "CCI Reversal", "tag": "Bearish", "color": "red", "criteria": [{ "type": "variable", "text": "CCI $1 crosses below $2", "variable": { "$1": { "type": "indicator", "study_type": "cci", "parameter_name": "period", "min_value": 1, "max_value": 99, "default_value": 20 }, "$2": { "type": "value", "values": [100, 200] } } }] };

test('renders Details for given data', () => {
    render(<DetailsContainer data={data} />);

    const titleEle = screen.getByText(data.name);
    expect(titleEle).toBeInTheDocument();
});


test('all cretaria should be displayed', () => {
    render(<DetailsContainer data={data} />);

    const allCretaria = screen.getAllByTestId("data-creatria-item");
    expect(allCretaria.length).toEqual(data.criteria.length);
});


test('all cretaria with variables should have links', () => {
    const {container} = render(<DetailsContainer data={data2} />);
    let expectedCount = 0;
    data2.criteria.map((crit) => {
        if (crit.type === 'variable')
            expectedCount++;
    });

    const allCretaria = screen.getAllByTestId("data-creatria-item");
    expect(container.getElementsByClassName('variable-text').length).toEqual(expectedCount);
});


