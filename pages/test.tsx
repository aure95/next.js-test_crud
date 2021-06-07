import Head from 'next/head';
import useEffect from 'react';
import styles from '../styles/Home.module.css';
import * as UserService from '../services/CrudOperationsService';
import {User} from '../domains/User';


export async function getStaticProps(context) {


  const user2: User = new User();
    user2.id = 2;
    user2.name = 'doe';
    user2.firstName = 'john';
    user2.mail = 'mail@test';
    user2.password = 'mysuperPassword';
  //const user: User = retrieve();
  console.log(user2);
 
 const user: User = JSON.parse(JSON.stringify(user2));

 const test3 = {value1: '2' , value2: 'this is a test'}
  
 const test = 'hola';

  return {
    props: {
      // props for your component
      test,
      user,
      test3

    }
  }
}

export default function Test({test, user, test3}) {

 const {contests} = user;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span>{test}</span>
      <table>
        <th>id</th>
        <th>name</th>
        <th>firstname</th>
        <th>mail</th>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.firstName}</td>
          <td>{user.mail}</td>
        </tr>
      </table>
      <span>{test3.value1}</span>
    </div>
    )
}

