import React from 'react'
const contentful = require('contentful')
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

const client = contentful.createClient({
 accessToken: 'dhVJpVQBppuvMv-Mjw_E_44PenQra3jVn-s8nvKMDFc',
 space: 'x7h3t1vvhyg3'
})


interface Props {
    
}

const index = ({data}: Props) => {
    console.log(data);
    return (
        <div>
            hey
        </div>
    )
}


export const getStaticProps:GetStaticProps = async () => {
  
    const response = await client.getContentType('myBlog')
    
    return {
      props: {
       data: response
      },
    };
  };
  

export default index
