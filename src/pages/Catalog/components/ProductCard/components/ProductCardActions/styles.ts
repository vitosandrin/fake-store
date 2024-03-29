import { FlexBox } from "@src/components";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  p {
    font-size: 0.825rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    svg {
      height: 1.115rem;
      width: 1.115rem;
    }
    button {
      padding: 0.5rem;
    }
    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const ContainerCartActions = styled(FlexBox)`
  width: fit-content;
  p {
    font-size: 0.825rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    svg {
      height: 1.115rem;
      width: 1.115rem;
    }
    button {
      padding: 0.5rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
