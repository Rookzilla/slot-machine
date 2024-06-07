// SlotMachine.styles.tsx
import styled, { css } from 'styled-components';
import { 
  Flashing,
  Flash,
  DotText,
  Expand,
  Shake,
  InteriorExpand,
  Spin,
  Click,
  Wave,
  FailExpand,
  WinExpand,

} from './slotMachine.styles.anims';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ReelContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  
  width: 90%;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1em;
    z-index: 1;
  }
`;

const ReelFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.2rem;
  background-image: url('/frame.png');
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
  z-index: 2;
`;

const ReelCutter = styled.div`
  overflow: hidden;
  height: 6rem;
  transform: translateY(-2px);
`;

const Reel = styled.div<{ isSpinning: boolean; finalPosition: number }>`

  font-size: 2rem;
  margin: 0 10px;
  display: inline-block;
  overflow: hidden;
  transform: translateY(4px);

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props =>
      props.isSpinning &&
      css`
        animation: ${Spin} 2s linear infinite;
      `}
    ${props =>
      !props.isSpinning &&
      css`
        transform: translateY(calc(-${props.finalPosition * 100}% + 4px));
      `}
    clip-path: inset(2px 0 4px 0);
  }

  img {
    height: 2.5em;
    width: 2.5em;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button<{ isSpinning: boolean }>`
  position: relative;
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 20px;
  border: 5px solid black;
  border-radius: 35px;
  font-size: 1.5rem;
  width: 100%;
  z-index: 2;
  font-family: 'Rye', cursive;
  font-size: 32px;
  cursor: ${props => (props.isSpinning ? 'not-allowed' : 'pointer')};
  background: linear-gradient(70deg, #EAE8D7, #EAE8D7, #58acd2, #EAE8D7, #EAE8D7, #EAE8D7, #EAE8D7, #EAE8D7, #EAE8D7);
  background-size: 200% 200%;
  animation: ${props => props.isSpinning ? css`${Click}` : css`${Wave} 4s ease infinite`};

  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    border: 5px solid #58acd2;
  }
`;

const ExpandingCircle = styled.div<{ isSpinning: boolean }>`
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff00;
  height: 20rem;
  width: 20rem;
  translate: 0 3rem;
  z-index: 0;
  animation: ${props => props.isSpinning ? css`${Expand} 7s linear forwards` : null};
`

const ExpandingInteriorCircle = styled.div<{ isSpinning: boolean }>`
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff00;
  height: 20rem;
  width: 20rem;
  translate: 0 3rem;
  z-index: 0;
  animation: ${props => props.isSpinning ? css`${InteriorExpand} 7s linear forwards` : null};
`

const StatusExplosionCircle = styled.div<{ playing: boolean, loss: boolean }>`
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff00;
  height: 20rem;
  width: 20rem;
  translate: 0 3rem;
  z-index: 0;
  animation: ${props => 
  props.playing ? 
    css`${props.loss ? FailExpand : WinExpand} 3s linear forwards` 
    : null
};
`;

const TextBox = styled.input`
  margin-top: 20px;
  border: 5px solid black;
  font-size: 1.5rem;
  padding: 6px;
  text-align: center;
  border-radius: 35px;
  font-family: 'Rye', cursive;
  font-size: 32px;
  background-color: #EAE8D7;
  width: 94%;
  z-index: 2;

  input: disabled {
    background-color: rgba(111, 159, 181, 1);
  }

  &:hover {
    border: 5px solid #58acd2;
  }
  
`;

const Payout = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rye', cursive;
`;

const Total = styled.div`
  margin-top: 20px;
  font-size: 2rem;
  z-index: 2;
  font-family: 'Rye', cursive;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

`;

const SpinningText = styled.path<{ flash: boolean }>`
  animation: ${DotText} 1s steps(4) infinite;
  animation: ${Flash} 0.5s linear alternate infinite;
  ${props =>
    props.flash &&
    css`
      color: green;
    `}
`;

const FlashingText = styled.span`
  animation: ${Flashing} 1s linear infinite;
`;

const SolidText = styled.span`
  opacity: 1;
`;

export {
  Container,
  ReelContainer,
  Reel,
  ReelFrame,
  Button,
  TextBox,
  Payout,
  Total,
  InputContainer,
  ReelCutter,
  SpinningText,
  FlashingText,
  SolidText,
  ExpandingCircle,
  ExpandingInteriorCircle,
  StatusExplosionCircle,
};
