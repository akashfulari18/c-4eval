import { User } from '@/utils/types'
import React from 'react'
import {Box ,Text,Button} from "@chakra-ui/react"
import { useRouter } from 'next/router'
type SignleUserProps={
    user:User
}
const Single_user = ({user}:SignleUserProps) => {
    const router = useRouter()
    
  const handleGetTodos =(id:string)=>{
     router.push(`people/${id}`)
  }
  return (
    <div>
        <Box textAlign={"center"}>
             <Box fontSize={"1.5rem"} color="blackAlpha.800" fontWeight={700}>{user.name}</Box>
             <Text color="blackAlpha.500" fontWeight={700}>{user.username}</Text>
             <Box p={"2rem"} 
          noOfLines={1} h="7px">{user.address.city},{user.address.street}</Box>
          <Button onClick={()=>handleGetTodos(String(user.id))}>Get Todos</Button>
        </Box>
    </div>
  )
}

export default Single_user