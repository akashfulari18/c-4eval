import { getUserAPI } from '@/utils/api'
import { User } from '@/utils/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import {Box,Flex} from "@chakra-ui/react"
import Single_user from '../../components/single_user'
type PeoplesProps={
  pepArr:User[]
}
const Peoples = ({pepArr}:PeoplesProps) => {
  console.log("pepArr",pepArr)
  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap="1rem">

      {
        pepArr && pepArr?.map((p)=>(
          <Box key={p.id} backgroundColor="gray.200" width="300px" p="0.5rem">
                {/* {p.name} */}
            <Single_user user={p}/>
          </Box>
        ))
      }
      </Flex>


    </div>
  )
}

export default Peoples

// export const getStaticPaths:GetStaticPaths=async()=>{
 

//    return {

//    }
// }

export const getStaticProps:GetStaticProps=async()=>{
  const data = await getUserAPI()

  return {
    props:{
      pepArr:data
    }
  }
}