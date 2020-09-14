import React, { useState, useEffect } from 'react'
import { Container, Header, Content, Spinner } from 'native-base';
import lista from './src/lista'
import styled from 'styled-components/native'
import ListaItem from './src/componentes/ListaItem'
import AddItemArea from './src/componentes/AddItemArea'
const Page = styled.SafeAreaView`
  flex:1;
`
const Listagem = styled.FlatList`
  flex:1;
`

  // <Scroll>
  //         {
  //           lista.map((item, index) => {
  //             return(
  //               <Item key={index} onPress={()=>{}} activeOpacity={0.7}>
  //                 <>
  //                   <ItemText>{item.task}</ItemText>
  //                   <ItemCheck></ItemCheck>
  //                 </>
  //               </Item>
  //             )
  //           })
  //         }  
  //       </Scroll>
export default () => {
  const [ status, setStatus ] = useState('') 

  return(
    <Page>
      <AddItemArea />
      <Listagem 
        data={lista}
        renderItem={({item})=><ListaItem data={item} />}
        keyExtractor={(item)=>item.id}
      />
    </Page>
  )
}

