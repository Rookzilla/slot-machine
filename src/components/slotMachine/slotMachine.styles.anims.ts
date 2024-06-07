import { keyframes } from 'styled-components';

const Wave = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const Click = keyframes`
  0% {
    background-position: 50% 50%;
    border-radius: 7px;
  }
  100% {
    background-position: 100% 0;
    border-radius: 0;
  }
`;

const Spin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const Shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

// make an animation that expands from 0rem to 22rem in 6 seconds.
const Expand = keyframes`
  0% { 
  transform: scale(0);
  background-color: #ffffff00;
  }
  1% { 
  transform: scale(0.5);
  background-color: #ffffff55;
  }
  98% { 
  transform: scale(1);
  background-color: #ffffff88;
  }
  100% { 
  transform: scale(0.8);
  background-color: #ffffff55;
  }
`;

const InteriorExpand = keyframes`
  0% { 
  transform: scale(0);
  background-color: #ffffff00;
  }
  100% { 
  transform: scale(0.9);
  background-color: #ffffff55;
  }
`;

const WinExpand = keyframes`
  0% { 
  transform: scale(0.1);
  background-color: #ffffff11;
  }
  5% { 
  transform: scale(1);
  background-color: #84f08d99;
  }
  100% { 
  transform: scale(0);
  background-color: #ffffff11;
  }
`;

const FailExpand = keyframes`
  0% { 
  transform: scale(0.1);
  background-color: #ffffff11;
  }
  5% { 
  transform: scale(1);
  background-color: #f27e5799;
  }
  100% { 
  transform: scale(0);
  background-color: #ffffff11;
  }
`;

const Flashing = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const DotText = keyframes`
  0%, 100% {
    content: 'SPINNING.';
  }
  33% {
    content: 'SPINNING..';
  }
  66% {
    content: 'SPINNING...';
  }
`;

const Flash = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;


export {
  Wave,
  Click,
  Spin,
  Shake,
  Expand,
  InteriorExpand,
  Flashing,
  DotText,
  Flash,
  WinExpand,
  FailExpand,
}