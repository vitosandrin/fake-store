import { FlexBox } from "@src/components";
import { styled } from "styled-components";

export const Container = styled(FlexBox)`
  border-radius: 10px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.font.colors[3]};
  box-shadow: 9px 13px 12px -3px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  height: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const ImageCard = styled.img`
  width: 3rem;
  border-radius: 7px;
`;

export const ContainerPrice = styled(FlexBox)`
  width: 50%;
`;
