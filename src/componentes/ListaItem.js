import React from 'react'
import styled from 'styled-components/native'


const Item = styled.TouchableOpacity`
  background-color: #eee;
  padding:10px;
  flex-direction: row;
`
const ItemText = styled.Text`
  font-size: 16px;
  flex:1;
`
const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:10px;
  border:1px solid #ccc;
`
export default (props) => {
    return(
        <Item onPress={()=>{}} activeOpacity={0.7}>
            <>
            <ItemText>{props.data.task}</ItemText>
            <ItemCheck></ItemCheck>
            </>
        </Item>
    )
}