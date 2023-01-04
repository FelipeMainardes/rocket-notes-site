import styled from "styled-components";

export let Container = styled.button`
    background: none;
    color: ${({theme, isActive}) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;


`;