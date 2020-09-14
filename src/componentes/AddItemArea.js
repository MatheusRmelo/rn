import React from 'react'
import styled from 'styled-components/native'

const AddItemArea = styled.View`
    background-color: #ccc;
    padding: 8px;
`
const AddItemInput = styled.TextInput`
    background-color: white;
    font-size: 16px;
    height:50px;
    border-radius:8px;
    padding: 8px;
`

export default ()=>{
    return( 
        <AddItemArea>
            <AddItemInput placeholder="Digite um novo item" />
        </AddItemArea>
    )
}