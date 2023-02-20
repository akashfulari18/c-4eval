import { Todos } from '@/utils/types'
import React from 'react'
import {Box,Text,Flex} from "@chakra-ui/react"

type Single_user_todos_props={
    todo:Todos
}
const Single_user_todo = ({todo}:Single_user_todos_props) => {
  return (
    
        <Box border="1px solid gray" width="300px" m="auto">
          <Text> {todo.completed?"completed" :"not-Comleted"}</Text>

          <Text>
             {todo.title}
            </Text> 
        </Box>
    
  )
}

export default Single_user_todo