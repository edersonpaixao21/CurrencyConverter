import logoImg from '../../assets/logo.png'

import * as S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <img src={logoImg} alt="logo" />

        <p>CONVERSOR DE MOEDAS</p>
      </S.Container>
    </S.Header>
  );
};
