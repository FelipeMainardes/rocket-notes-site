import styled from 'styled-components';
import backgroundImg from '../../assets/background.png'

export let Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export let Formulary = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};

    
    }

    >h2{
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    >p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        text-decoration: underline;
    }

    > a{
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
        text-decoration: underline;

    }


`;


export let Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

`;