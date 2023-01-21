import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Select,
  Button,
} from '@chakra-ui/react'



export default function LoginForm() {
  return (
    <div className='background'>
      <div className='container'>
        <Heading className='heading-center'>Sign Up</Heading>

        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input type='text' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Occupation</FormLabel>
          <Select placeholder='Select occupation'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>State</FormLabel>
          <Select placeholder='Select state'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormControl>

        <Button type='submit' colorScheme='teal' className='btn-center'>
          Create Account
        </Button>
      </div>
    </div>
  )
}