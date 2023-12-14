import React, { useState, useEffect } from 'react';
import Section from '../Section/index';
import DisplayWinner from '../DisplayWinner';

function RamenVote() {
  const [shoyuVote, setShoyuVote] = useState(0);
  const [tonkotsuVote, setTonkotsuVote] = useState(0);
  const [shioVote, setShioVote] = useState(0);
  const [misoVote, setMisoVote] = useState(0);

  const [winner, setWinner] = useState(null);

  const votesForShoyu = [shoyuVote, tonkotsuVote, shioVote, misoVote]

  const handleClick = (soppa) => {
    if (soppa === 'Shoyu Ramen') {
      setShoyuVote(shoyuVote + 1);
    } else if (soppa === 'Tonkotsu Ramen') {
      setTonkotsuVote(tonkotsuVote + 1);
    } else if (soppa === 'Shio Ramen') {
      setShioVote(shioVote + 1);
    } else if (soppa === 'Miso Ramen') {
      setMisoVote(misoVote + 1);
    }
  };

  useEffect(() => {
    calculateWinner();
  }, [shoyuVote, tonkotsuVote, shioVote, misoVote]);

  const calculateWinner = () => {
    const voteCounts = {
      'Shoyu Ramen': shoyuVote,
      'Tonkotsu Ramen': tonkotsuVote,
      'Shio Ramen': shioVote,
      'Miso Ramen': misoVote,
    };

    const maxVotes = Math.max(...Object.values(voteCounts));

    console.log('Max votes: ' + maxVotes);
    const winners = Object.keys(voteCounts).filter(
      (key) => voteCounts[key] === maxVotes
    );

     if (maxVotes !==0){
    if (winners.length === 1) {
      setWinner(`${winners[0]} has ${maxVotes} votes`);
    } else {
      setWinner(
        `it's a tie between ${winners.join(' and ')} with ${maxVotes}`
      );
    }
  }
  };


  return (
    <div>
      {winner && <DisplayWinner winner = {winner} />}
      <div>
        <p data-testid="">shoyuVote
          {shoyuVote}
        </p>
        <p data-testid="">tonkotsuVote
          {tonkotsuVote}
        </p>
        <p data-testid="">shioVote
          {shioVote}
        </p>
        <p data-testid="">misoVote
          {misoVote}
        </p>
        <Section
          title="Shoyu Ramen"
          subtitle="Shoyu ramen features a clear, brown broth with a chicken or vegetable stock base and soy sauce"
          onclick={() => handleClick("Shoyu Ramen")}
          
        />
        <Section
          title="Tonkotsu Ramen"
          subtitle="Tonkotsu ramen originated in Kurume, Fukuoka Prefecture, located on the northern shore of Kyushu island in Japan"
          onclick={() => handleClick("Tonkotsu Ramen")}
        />
        <Section
          title="Miso Ramen"
          subtitle="Miso ramen gets its name from the generous amount of miso that gives the broth a strong, pleasantly sharp umami flavor."
          onclick={() => handleClick("Miso Ramen")}
        />
        <Section
          title="Shio Ramen"
          subtitle="Shio is the oldest of the four flavors and means “salt,” as sea salt was the oldest form of seasoning, dating back to the original Chinese-style noodle soups in the 1800s."
          onclick={() => handleClick("Shio Ramen")}
        />
      </div>
    </div>
  );
}

export default RamenVote;