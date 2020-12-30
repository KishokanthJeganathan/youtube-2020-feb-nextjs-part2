import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios';

interface People {
  data:[{  avatar: string;
    email: string;
    first_name: string,
    id: number;
    last_name: string;}]

}


export const getStaticProps:GetStaticProps = async () => {
  
  const{data}=  await axios.get('https://reqres.in/api/users?page=2')
  
  return {
    props: {
     data: data.data
    },
  };
};



export default function List({data}:People) {
console.log(data); 

  return (
    <div>
     <ul>{data.map(item=> <li>{item.last_name}</li>)}</ul>
    </div>
  );
}


