import styled from "styled-components"


const Container = styled.div`
width: 100vw;
height: 100vh;
/*background: url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");*/
display: flex;
align-items:center;
justify-content: center;
`
const Wrapper = styled.div`
width: 25%;
padding:20px;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px;
padding: 10px;

`


const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
text-transform: uppercase;
cursor: pointer;
margin-bottom: 15px;


&:hover{
background-color:lightgrey;
}
`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const LogIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username"/>
          <Input placeholder="password"/>
          <Button>Log in</Button>
          <Link>Forgot Your Password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default LogIn
