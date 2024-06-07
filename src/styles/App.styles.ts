import styled from 'styled-components';

const Plate = styled.div`
  background-image: url('/platebackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  max-width: 500px;
  z-index: -2;
`;

const ProductionsTagline = styled.div`
  position: relative;
  top: -4rem;
  color: white;
  font-size: 190%;
  font-family: 'Libre Barcode 128 Text', cursive;
  font-weight: 400;
  font-size: 2.5em;
  font-style: normal;
  text-align: center;
  padding-bottom: auto;
`;

export {
    ProductionsTagline,
    Plate,
}