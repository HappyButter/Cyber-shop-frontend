import axios from '../../axios-config.js';

import { useState, useEffect } from 'react';
import { Middlepane } from 'styles/Middlepane.css';
import { CategoriesBar, AppBar} from 'components';

import styled from 'styled-components';

const Paragraph = styled.p`
    color: rgba(0,0,0,.75);
    font-size: 3em;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-family: "Lucida Console", "Courier New", monospace;
`;

const IncomeBox = styled.div`
    background-color: green;
    padding: 1em;
    border-radius: 1em;
`;


const OutcomeBox = styled.div`
    background-color: red;
    padding: 1em;
    border-radius: 1em;
`;

const Finances = () => {
    const [balance, setBalance] = useState({});

    useEffect( () => {
        axios.get('/orders/shop/balance')
        .then(res => {
            console.log(res.data)
            setBalance(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <>
            <AppBar></AppBar>
            <CategoriesBar></CategoriesBar>
            <Middlepane>
                
                <Paragraph>saldo sklepu</Paragraph>
                <hr/>
                <IncomeBox>
                    <h1>Przychody: {balance.income} zł</h1>
                    <h1>Liczba transakcji: {balance.incomeCount}</h1>
                </IncomeBox>
                <hr/>
                <OutcomeBox>
                    <h1>Wydatki: {balance.outcome} zł</h1>
                    <h1>Liczba transakcji: {balance.outcomeCount}</h1>
                </OutcomeBox>
                <hr/>
            </Middlepane>
        </>
    );
};

export default Finances;
