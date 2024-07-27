import Head from 'next/head';
import Link from 'next/link'; 

export default function Home({ allPostsData }) {
  return (
    <> 
      <section >
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   // const allPostsData = getSortedPostsData();
//   const allPostsData=[{
//     id:10,
//     name: 'gholam reza',
//     age:37
//   },
//   {
//     id:11,
//     name: 'saeid',
//     age:35
//   }];
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }


import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}