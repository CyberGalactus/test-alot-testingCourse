import {render, screen} from '@testing-library/react';
import Header from '.'


test('the page title and sub title are rendered correctly', () => {
    render(<Header title="welcome to my website!" />)

    const pageTitle = screen.getByRole("heading", {level: 1});
    const subTitle = screen.getByRole("heading", {level: 2});

    expect(pageTitle).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
});

// add test that
test('title prop render correctly', () => {
    render(<Header title="welcome to my website!" />)

    const pageTitleText = screen.getByText(/welcome to my website/i);

    expect(pageTitleText).toBeInTheDocument();
});