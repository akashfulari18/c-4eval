import { getTodosAPI } from "@/utils/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Text ,Flex} from "@chakra-ui/react";
import { Todos } from "@/utils/types";
import Single_user_todo from "../components/single_user_todo";

const Pid = () => {
  const [data, setData] = useState<Todos[]>([]);
  const router = useRouter();
  const  id   = String(router.query.pid );

  
  useEffect(()=>{
      getTodosAPI(String(id))
      .then((res) => {
        console.log("res",res)
        setData(res)
      })
      .catch((e) => console.log(e));
    },[])
    
    // console.log(data)
  return (
    <div>
      <Box  textAlign={"center"}>
      User ID: {id}
      <Box>Todos Data</Box>
        {data &&
          data?.map((item) => (
            <Box key={item.id} textAlign="center">
              
             <Single_user_todo todo={item} />
            </Box>
          ))}
      </Box>
    </div>
  );
};

// <Box>
//
//

//
// </Box>

export default Pid;