import React from 'react'
import { Container } from './LoginElements';
import { FormWrap } from './LoginElements';
import { Icon } from './LoginElements';
import { FormContent } from './LoginElements';
import { Form } from './LoginElements';
import { FormH1 } from './LoginElements';
import { FormLabel } from './LoginElements';
import { FormInput } from './LoginElements';
import { FormButton } from './LoginElements';
import { Text } from './LoginElements';
import Footer from '../Footer';



//LogIn = Name, License
//Register = Name, License, Contact, Address 
const LabForm = () => {
  return (
    <>      
    <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
            <FormContent>
                <Form action="/LabDashboard">
                    <FormH1>Sign Up to register as new Laboratory</FormH1>
                    <FormLabel htmlFor='for'>UserID</FormLabel>
                    <FormInput type={String} required />
                    <FormLabel htmlFor='to'>Private Key</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit' to='/LabDashboard'>Register</FormButton>
                      {/* <Text>Forgot Password</Text>
                      <Text>Sign Up</Text> */}
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
      <Footer/>
    </>    
  );
};

export default LabForm;