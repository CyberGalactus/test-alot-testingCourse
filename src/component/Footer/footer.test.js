import {rendeer, render, screen} from '@testing-library/react';
import Footer from '.';

describe("the footer is render title and subtitle correctly", () => {

    test('the footer title is rendered', () => {
        render(<Footer />)
        
        const footerTitle = screen.getByRole("heading", {level: 2});
        
        expect(footerTitle).toBeInTheDocument();
    });

    test('the footerparagraph is rendered', () => {
        render(<Footer />)
        
        const subTitle = screen.getByTestId("paragraph");

        expect(subTitle).toBeInTheDocument();
    });
});
