import styled from "styled-components"
import {Link} from 'react-router-dom'

const Container = styled.div`
flex:1;
margin: 5px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
text-transform: uppercase;
`
const Title = styled.h1`
color:white;
margin-bottom: 20px;

`
const Button = styled.button` 

border: none;
padding: 10px;
background-color: white;
color: grey;
cursor: pointer;
text-transform: uppercase;
font-weight: 600;
`


const CategoryItem = ({item}) => {
  return (
    

    
    <Container>
    <Link to={`products/${item.category}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button href="/shoplist">Shop now</Button>
      </Info>
    </Link>
    </Container>
    
  )
}

export default CategoryItem
