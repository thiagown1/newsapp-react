import styled from 'styled-components/native';

const RoundView = styled.View `
    border-radius: 20px;
    overflow: hidden;
    flex: 1;
`

const CardBackground = styled(RoundView)`
    height: 90%;
    width: 90%;
    overflow: visible;
    background-color: white;
    box-shadow: 0px 10px 30px black;
    shadowOpacity: 0.1;
    margin-bottom: 40px;
`

export { RoundView, CardBackground }

