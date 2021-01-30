import axios from '../../axios-config.js';

import { useState, useEffect } from 'react';
import { Middlepane } from 'styles/Middlepane.css';
import { AppBar} from 'components';

import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 3em;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
`;

const Box = styled.div`
    padding: 1em;
    position: relative;

    &:before {
    	content: '';
		position: absolute;
		bottom: 0; left: 0;
		width: 0;
    }

    &:after {
    	content: '';
		position: absolute;
		top: 0; right: 0;
		width: 0;
    }
`;

const IncomeBox = styled(Box)`
    background-color: green;

    &:before {
		border-bottom: 70px solid rgb(32, 32, 32);
		border-right: 70px solid green;
    }

    &:after {
		border-right: 70px solid rgb(32, 32, 32);
		border-bottom: 70px solid green;
    }
`;

const OutcomeBox = styled(Box)`
    background-color: red;

    &:before {
		border-bottom: 70px solid rgb(32, 32, 32);
		border-right: 70px solid red;
    }

    &:after {
		border-right: 70px solid rgb(32, 32, 32);
		border-bottom: 70px solid red;
    }
`;

const BalanceeBox = styled(Box)`
    background-color: rgba(255,255,255,0.2);

    &:before {
		border-bottom: 70px solid rgb(32, 32, 32);
		border-right: 70px solid rgba(255,255,255,0.2);
    }

    &:after {
		border-right: 70px solid rgb(32, 32, 32);
		border-bottom: 70px solid rgba(255,255,255,0.2);
    }
`;


const Finances = () => {
    const [balance, setBalance] = useState({});

    useEffect( () => {
        axios.get('/orders/shop/balance')
        .then(res => {
            setBalance(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    

    return (
        <>
            <AppBar></AppBar>
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
                <BalanceeBox>
                    <h1>Saldo: {(parseFloat(balance.income) + parseFloat(balance.outcome)).toFixed(2)} zł</h1>
                    <h1>Wszystkich transakcji: {parseInt(balance.incomeCount) + parseInt(balance.outcomeCount)}</h1>
                </BalanceeBox>
                
            </Middlepane>
        </>
    );
};

export default Finances;
