import styled, { css } from 'styled-components';
import { LoadingProps } from './Loading.types';

export const Wrapper = styled.div<Pick<LoadingProps, 'skin' | 'size'>>`
  ${({ theme, size, skin = 'neutral' }) => {
    const loadingSizes = {
      sm: theme.size.sm,
      md: theme.size.md,
      lg: theme.size.lg,
    };
    const loadingBarHeights = {
      sm: '2px',
      md: '4px',
      lg: '6px',
    };
    return css`
      --clr-primary: ${theme.colors.palette[skin][500]};
      --clr-background: ${theme.colors.text.disabled};
      --size: ${loadingSizes[size]};
      --height: ${loadingBarHeights[size]};
    `;
  }};
  width: 100%;
`;

export const CircleLoading = styled.svg`
  display: block;
  width: var(--size);
  transform-origin: center;
  animation: rotate4 2s linear infinite;
  margin: 0 auto;

  circle {
    fill: none;
    stroke: var(--clr-primary);
    stroke-width: var(--border-width-sm);
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;

export const BarLoading = styled.div`
  width: 100%;
  background: var(--clr-background);
  height: var(--height);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  div {
    height: var(--height);
    border-radius: var(--border-radius-sm);
    background: var(--clr-primary);
    transition: 0.5s;
    animation: loading_44 6s cubic-bezier(0.4, 1.01, 1, 1) infinite;
  }

  @keyframes loading_44 {
    0% {
      width: 0%;
    }

    50% {
      width: 100%;
    }

    100% {
      width: 0%;
    }
  }
`;
