import styled from 'styled-components';
import colors from 'styles/colors.styles';

export const Header = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;

    h1 {
        font-size: 1em;
        color: ${colors.white};
    }
`;
