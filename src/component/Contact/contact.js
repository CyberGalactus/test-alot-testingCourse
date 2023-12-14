import { render, screen} from "@testing-library/react";
import Contact from ".";


describe("testing contact to see if it renders", () => {
  test("render title", () => {
    render(<Contact />);

    const contactTitle = screen.getByRole("heading", { level: 1 });

    expect(contactTitle).toBeInTheDocument();
  });



});
