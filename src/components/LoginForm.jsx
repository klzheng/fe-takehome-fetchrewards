import { useState, useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Select,
  Button,
} from '@chakra-ui/react'




export default function LoginForm() {
  
  const [options, setOptions] = useState({})
  const [userData, setUserData] = useState({
    name:"", 
    email:"",
    password:"",
    occupation:"",
    state:"",
  })


  const getOptions = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setOptions({occupations: data.occupations, states: data.states})
      console.log({occupations: data.occupations, states: data.states})
    })
  }
  

  const handleInputChange = (e) => {
    setUserData({
      ...userData, 
      [e.target.name]: e.target.value 
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const postURL = "https://frontend-take-home.fetchrewards.com/form"

    fetch(postURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(() => alert("User created successfully!"))
      .catch(err => console.log("Error ->", err))
  }


  useEffect(() => {
    const url = "https://frontend-take-home.fetchrewards.com/form"
    getOptions(url)
  }, [])


  return (
    <div className='background'>
      <div className='container'>
        <Heading className='heading-center'>Sign Up</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input 
              name='name' 
              type='text' 
              onChange={handleInputChange} 
              value={userData.name} 
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input 
              type='email' 
              name='email' 
              onChange={handleInputChange}
              value={userData.email}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input 
              type='password' 
              name='password' 
              onChange={handleInputChange}
              value={userData.password}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Occupation</FormLabel>
            <Select 
              placeholder='Select occupation' 
              name='occupation' 
              onChange={handleInputChange}
              value={userData.occupation}
            >
              {Object.keys(options).length !== 0 && options.occupations.map((occupation, index) => {
                return (
                  <option key={index} value={occupation}>{occupation}</option>
                )
              })}
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Select 
              placeholder='Select state'
              name='state'
              onChange={handleInputChange}
              value={userData.state}
            >
              {Object.keys(options).length !== 0 && options.states.map((state, index) => {
                return (
                  <option key={index} value={state.name}>{state.name}</option>
                )
              })}
            </Select>
          </FormControl>

          <Button 
            type='submit' 
            onSubmit={handleSubmit}
            colorScheme='teal' 
            className='btn-center'
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}