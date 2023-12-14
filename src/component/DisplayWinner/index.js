  const DisplayWinner = ({winner}) => {
      return (
        <div>
          <span data-testid="winner-container">{winner}</span>
        </div>
      );
  };

  export default DisplayWinner;