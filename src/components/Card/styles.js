import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 35rem;
    background-color: hsl(0, 0%, 100%);
    border-radius: 1rem;
`
export const Content = styled.div`
    padding: 1.5rem;
`

export const Image = styled.img`
    height: 450px;
    border-radius: 1rem 0 0 1rem;
`

export const NameProduct = styled.h3`
    color: hsl(228, 12%, 48%);
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    font-weight: 400;
    margin-bottom: 1rem;
    letter-spacing: .3rem;
`

export const MainTitle = styled.h1`
    color: hsl(212, 21%, 14%);
    margin-bottom: 1rem;
`
export const DescriptionText = styled.p`
    color: hsl(228, 12%, 48%);
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1rem;
    font-size: .9rem;
    line-height: 1.4rem;
`

export const DivPrice = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`

export const Price = styled.h2`
    color: hsl(158, 36%, 37%);
    font-size: 2rem;
    margin-right: 1.5rem;
`
export const PriceOff = styled.span`
    color: hsl(228, 12%, 48%);
`

export const Button = styled.button`
    width: 100%;
    padding: 1rem 0;
    border-radius: .8rem; 
    background-color: hsl(158, 36%, 37%);
    color: #fff;
    border: none;
    font-weight: 400;

    &:hover {
        background-color: hsl(158, 36%, 15%);
        transition: 1s;
    }
`
