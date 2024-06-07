import React, { useState } from 'react';
import { spinSlotMachine, checkWin, Symbol } from './slotMachine.logic';
import SmoothCounter from '../smoothCounter/smoothCounter';
import * as SC from './slotMachine.styles';

const SlotMachine = () => {
  const [reels, setReels] = useState<Symbol[][]>([['question', 'question', 'question'], ['question', 'question', 'question'], ['question', 'question', 'question']]);
  const [wager, setWager] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [finalPositions, setFinalPositions] = useState<number[]>([0, 0, 0]);
  const [totals, setTotals] = useState<number>(0);
  const [tempPayout, setTempPayout] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [spinButtonText, setSpinButtonText] = useState('BET');
  const [finish, setFinish] = useState('NOTHING');

  const handleSpin = () => {
    setIsSpinning(true);
    setSpinButtonText('SPINNING');

    const newReels = spinSlotMachine(30); // Number of iterations to simulate spinning
    setReels(newReels);

    setTimeout(() => {
      stopReel(0, newReels);
    }, 2000);

    setTimeout(() => {
      stopReel(1, newReels);
    }, 4000);

    setTimeout(() => {
      stopReel(2, newReels);
      setTimeout(() => {
        const finalSymbols = newReels.map(reel => reel[reel.length - 1]);
        const newPayout = checkWin(finalSymbols);
        setIsSpinning(false);

        const finalPositions = newReels.map(reel => reel.length - 1);
        setFinalPositions(finalPositions);

        if (newPayout === 0) {
          setTotals(totals - wager);
          setTempPayout(0);
          setSpinButtonText('LOSS!');
          setFinish('LOSS');
          setTimeout(() => {
            setSpinButtonText('SPIN AGAIN');
          }, 3000);
        } else {
          setTempPayout(newPayout * wager);
          setFinish('WIN');
          setSpinButtonText(newPayout === 100 ? 'JACKPOT!' : 'WINNER!');

          setTimeout(() => {
            setIsCalculating(false);
            setTotals(totals + newPayout * wager);
            setSpinButtonText('SPIN AGAIN');
            setFinish('NOTHING');
          }, 3000);
        }
      }, 1000); // Spin duration
    }, 6000);
  };

  const stopReel = (reelIndex: number, newReels: Symbol[][]) => {
    const finalPosition = newReels[reelIndex].length - 1;
    setFinalPositions(prevPositions => {
      const newPositions = [...prevPositions];
      newPositions[reelIndex] = finalPosition;
      return newPositions;
    });
  };

  const getImagePath = (symbol: string) => `${symbol}.png`;

  return (
    <SC.Container id={'component-container'}>
      <SC.ReelContainer id={'reel-container'}>
        {reels.map((reel, index) => (
          <SC.ReelFrame 
          id={`reel-frame-${index}`} 
          key={index}>
            <SC.ReelCutter 
            id={`reel-cutter-${index}`}>
              <SC.Reel 
              id={`reel-${index}`}
              isSpinning={isSpinning} 
              finalPosition={finalPositions[index] / reel.length}>
                <span>
                  {reel.map((symbol, reelIndex) => (
                    <img key={reelIndex} src={getImagePath(symbol)} alt={symbol} />
                  ))}
                </span>
              </SC.Reel>
            </SC.ReelCutter>
          </SC.ReelFrame>
        ))}
      </SC.ReelContainer>
      <SC.ExpandingCircle id={'circle'} isSpinning={isSpinning} />
      <SC.ExpandingInteriorCircle id={'interior-circle'} isSpinning={isSpinning} />
      <SC.StatusExplosionCircle 
        id="status-explosion-circle" 
        playing={finish !== 'NOTHING'} 
        loss={finish === 'LOSS'} 
      />
      <SC.InputContainer id={'input-container'}>
        <SC.TextBox
          id={'wager-textbox'}
          placeholder={"WAGER"}
          onInput={(e) => e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')}
          onChange={(e) => setWager(Number(e.target.value))}
          value={wager.toString()}
          disabled={isSpinning || isCalculating}
        />
        <SC.Button 
          onClick={handleSpin}
        disabled={isSpinning || isCalculating} 
        isSpinning={isSpinning}>
          {isSpinning ? <SC.FlashingText>{spinButtonText}</SC.FlashingText> : <SC.SolidText>{spinButtonText}</SC.SolidText>}
        </SC.Button>
        <SC.Payout id={'payout'}
        color={tempPayout > 0 ? 'green' : 'red'}
        className={isCalculating ? '' : tempPayout > 0 ? 'win' : 'lose'}
        >
          Payout: <SmoothCounter value={tempPayout} duration={75} />
        </SC.Payout>
        <SC.Total>Total: <SmoothCounter value={totals} duration={250} /></SC.Total>
      </SC.InputContainer>
    </SC.Container>
  );
};

export default SlotMachine;
