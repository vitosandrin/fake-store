import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    background-color: white;
`;

export const Card = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid grey;
    background-color: white;
    transition: all 0.3s ease;
    padding: 10px;
    :hover {
  transform: scale(1.1);
}
`;

export const CardImage = styled.img`
    max-height: 130px;
    max-width: 130px;
    margin-left: auto;
    margin-right: auto;
    overflow-y: hidden;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    padding: 5px;
`;

export const Price = styled.div`
    padding: 5px;
`;
