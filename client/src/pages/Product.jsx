import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Container = styled.div``
const Wrapper = styled.div`
padding:20px;
display: flex;
`
const ImageContainer = styled.div`
flex:1;

`
const Image = styled.img`
width:100%;
height: 90vh;
object-fit:cover;
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;
`
const Description = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display:flex;
justify-content:space-between;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
margin: 0px 5px;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
cursor: pointer;

`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items:center;
font-weight: 700;

`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid black;
display: flex;
align-items:center;
justify-content:center;
margin: 0px 5 px;
`
const Button = styled.button`
padding: 15px;
border: 1px solid black;
background-color: white;
font-weight: 500;
text-transform: uppercase;
cursor: pointer;

&:hover{
  background-color: #f8f4f4
}

`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
        </ImageContainer>

        <InfoContainer>
          <Title>Denim</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto expedita corrupti voluptate placeat saepe voluptatem id iure error iusto?</Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="gray"/>
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Product
