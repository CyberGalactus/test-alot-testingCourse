import {render, screen, fireEvent, getByRole} from '@testing-library/react';
import Section from ".";

describe("render all title, subtitle, button and onclick", () =>{
    test ("renders the title and subtitle", () => {
        render(<Section />)

        const titleElement = screen.getByRole("heading", {level: 3});
        const subTitleElement = screen.getByTestId("subTitle");

        expect(titleElement).toBeInTheDocument();
        expect(subTitleElement).toBeInTheDocument();

    });

    test("render button correctly", () => {
        render(<Section />)

        const Button = screen.getByRole("button");

        expect(Button).toBeInTheDocument;
    });

    test("test that title exist and is rendered correctly", () => {
        render(<Section title="hello there"/>)

        const titleElementText = screen.getAllByText(/hello there/i);

        expect(titleElementText).toBeInTheDocument;
    });

        test("test that subtitle exist and is rendered correctly", () => {
        render(<Section subtitle="hi there"/>)

        const subTitleElementText = screen.getAllByText(/hi there/i);

        expect(subTitleElementText).toBeInTheDocument;
    });

        test("Button onclick", () => {
        const mockOnClick = jest.fn();

        render(<Section onClick={mockOnClick} />);
        const button = screen.getByRole('button'); // <-- Här var det en liten felaktighet
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    
});