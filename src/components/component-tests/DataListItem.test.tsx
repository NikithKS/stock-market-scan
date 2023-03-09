import { render, screen } from '@testing-library/react';
import DataListItem from '../DataListItem';


const data = { "id": 1, "name": "Top gainers", "tag": "Intraday Bullish", "color": "green", "criteria": [{ "type": "plain_text", "text": "Sort - %price change in descending order" }] };
// { "id": 2, "name": "Intraday buying seen in last 15 minutes", "tag": "Bullish", "color": "green", "criteria": [{ "type": "plain_text", "text": "Current candle open = current candle high" }, { "type": "plain_text", "text": "Previous candle open = previous candle high" }, { "type": "plain_text", "text": "2 previous candle’s open = 2 previous candle’s high" }] };


test('renders Data List Items', () => {
    render(<DataListItem obj={data} />);

    const listItem= screen.getByTestId('data-list-item');
    expect(listItem).toBeInTheDocument();
    const titleEle = screen.getByText(data.name);
    expect(titleEle).toBeInTheDocument();
})

test('renders Data List Items', () => {
    render(<DataListItem obj={data} />);

    const tagEle = screen.getByText(data.tag);
    expect(tagEle).toBeInTheDocument();
})