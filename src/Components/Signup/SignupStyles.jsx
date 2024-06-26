import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../../Assets/background-sig.jpg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
    background: url(${backgroundImage}) no-repeat center center fixed; 
    background-size: cover;
    padding: 20px;
`;

export const FormWrapper = styled.div`
    background: #3f753b84;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    color: white;
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: ${(props) => (props.fullWidth ? '100%' : '49.8%')};
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #C9DF8A;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #aac268;
    }
`;

export const TextLink = styled.p`
    margin-top: 25px;
    text-align: left;
    color: black;
`;

export const StyledLink = styled(Link)`
    color: #4CAF50;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
