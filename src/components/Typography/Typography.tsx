import React from 'react';
import * as T from './types';
import * as S from './styles';
import { GlobalContext } from '../../context';

export const Typography: React.FC<T.TypographyProps> = ({
  children,
  variant,
}) => {
  const { theme, themeToggle } = React.useContext(GlobalContext);

  // if ((variant = 'h1')) return <S.H1>{children}</S.H1>;
  return (
    <>
      <S.Wrapper>{children}</S.Wrapper>
      <button onClick={themeToggle} style={{ background: theme.body }}>
        {theme.name}
      </button>
    </>
  );
};
