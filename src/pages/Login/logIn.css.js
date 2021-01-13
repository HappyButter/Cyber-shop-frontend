import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

export const CustomTextField = styled(TextField)`&&{
    background-color: rgba(50,85,134);
    color: rgba(255,255,255,.75) !important;
    /* color: rgba(255,255,255) !important; */
}
`

export const SignInWrapper = styled(Container)`
    background-color: rgba(50,85,134,.80);
    font-size: 180%;
    border-radius: 1em;
    height: 60vh;
    width: 60vh;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`