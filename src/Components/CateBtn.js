import React from 'react'
import styled from 'styled-components'

function CateBtn({name}) {
    return (
        <CateBtnStyled>
            <p>{name} </p>
        </CateBtnStyled>
    )
}

const CateBtnStyled = styled.div`
    background-color: rgba(0, 0, 0, .06);
    padding: 2rem 1rem;
    border-radius: 7px;
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover{
        background: var(--color-primary);
        p{
            color: var(--color-white)
        }
    }

    p{
        text-align: center;
    }

`

export default CateBtn
