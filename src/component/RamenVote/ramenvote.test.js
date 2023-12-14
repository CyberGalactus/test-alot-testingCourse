import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RamenVote from '.';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

describe('RamenVote', () => {
  it('renders the component with sections', () => {
    render(<RamenVote />);
 
    let shoyuButton = screen.getByRole("button", {name: /shoyu ramen/i});

    expect(shoyuButton).toBeInTheDocument();
  });

    it('renders the a vote fot shoyu ramen', () => {
    render(<RamenVote />);
 
    let winnerConatainer = screen.queryByTestId("winner-container");

    expect(winnerConatainer).not.toBeInTheDocument();

    let shoyuButton = screen.getByRole("button", {name: /shoyu ramen/i});

    fireEvent.click(shoyuButton);

    winnerConatainer = screen.queryByTestId("winner-container");

    expect(winnerConatainer).toBeInTheDocument();

    expect(winnerConatainer.textContent).toContain("Shoyu Ramen has 1 votes");
  });

  it('renders the votes for Tonkotsu Ramen and Miso Ramen', () => {
    render(<RamenVote />);

    let winnerContainer = screen.queryByTestId("winner-container");

    expect(winnerContainer).not.toBeInTheDocument();

    let tonkotsuButton = screen.getByRole("button", { name: /tonkotsu ramen/i });

    fireEvent.click(tonkotsuButton);

    winnerContainer = screen.queryByTestId("winner-container");

    expect(winnerContainer).toBeInTheDocument();

    expect(winnerContainer.textContent).toContain("Tonkotsu Ramen has 1 votes");

    let misoButton = screen.getByRole("button", { name: /miso ramen/i });

    fireEvent.click(misoButton);

    fireEvent.click(misoButton);

    fireEvent.click(misoButton);

    winnerContainer = screen.queryByTestId("winner-container");

    expect(winnerContainer).toBeInTheDocument();

    expect(winnerContainer.textContent).toContain("Miso Ramen has 3 votes");
});

  it('renders the votes for Miso Ramen, Shio Ramen, and Tonkotsu Ramen', () => {
    render(<RamenVote />);

    let misoButton = screen.getByRole("button", { name: /miso ramen/i });

    fireEvent.click(misoButton);

    fireEvent.click(misoButton);

    let winnerContainer = screen.queryByTestId("winner-container");

    expect(winnerContainer).toBeInTheDocument();

    expect(winnerContainer.textContent).toContain("Miso Ramen has 2 votes");

    let shioButton = screen.getByRole("button", { name: /shio ramen/i });

    fireEvent.click(shioButton);

    fireEvent.click(shioButton);

    winnerContainer = screen.queryByTestId("winner-container");

    expect(winnerContainer).toBeInTheDocument();

    expect(winnerContainer.textContent).toContain("it's a tie between Shio Ramen and Miso Ramen with 2");

    let tonkotsuButton = screen.getByRole("button", { name: /tonkotsu ramen/i });

    fireEvent.click(tonkotsuButton);

    fireEvent.click(tonkotsuButton);

    winnerContainer = screen.queryByTestId("winner-container");

    expect(winnerContainer).toBeInTheDocument();

    expect(winnerContainer.textContent).toContain("it's a tie between Tonkotsu Ramen and Shio Ramen and Miso Ramen with 2");
  });


});