import { Facebook, Instagram, Mail, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Description = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color }


`

const Center = styled.div`
  flex:1;
  padding: 20px;
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 40%;
margin-bottom: 10px;
`

const Right = styled.div`
  flex:1;
  padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Vistula</Logo>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, iusto!</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>Pobeda 2 </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+1 234 567 890</ContactItem>
        <ContactItem><Mail style={{marginRight:"10px"}}/>contact@mail.ru</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
