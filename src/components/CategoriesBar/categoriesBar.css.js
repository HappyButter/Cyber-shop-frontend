import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';

export const CustomIconButton = styled(IconButton)`
    color: rgba(255,255,255,.75);
    font-size: 90%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Anonymous Pro', monospace;
`

export const CustomAppBar = styled(AppBar)`
    color: rgba(255,255,255,.75);
    align-items: center;
    font-size: 90%;
    margin-bottom: 10px;
`