import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Counter from './Counter'
import Users from './users'
import Friends from './Friends'

function App() {

  const actors = ['Shakib', 'Joshim', 'Rubel', 'Rajjak', 'Sani']

  const singers = [
    {name: 'Eva', age: 34},
    {name: 'Poros', age: 43},
    {name: 'Pritom', age: 28},
    {name: 'Jabed', age: 22}
  ]

  const books = [
    {name: 'Math', price: 99},
    {name: 'Bangla', price: 77},
    {name: 'English', price: 88},
    {name: 'Arabic', price: 98},
  ]
  return (
    <>
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>
      <Counter></Counter>

      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
     {/* <Person></Person>
     <Todo task="Learn React" isDone={true}></Todo>
     <Todo task="Learn Core Concept" isDone={false}></Todo>
     <Todo task="Basic JS" isDone={true}></Todo> */}
     {/* <Student grade='9' score='99'></Student>
     <Student grade={8} score={76}></Student>
     <Student></Student>
     <Developer></Developer>
     <Device name='phone' price='12000'></Device>
     <Device name='laptop' price='66000'></Device>
     <Device name="watch" price="9000"></Device> */}
    </>
  )
}

function Device(props){
  return <h2>This device: {props.name}, price: {props.price}</h2>
}

function Person(){
  const age= 26;
  const money = 64;
  const select = {
    name: 'shakib',
    doing: 'job'
  }
  return <h3>I am {select.name} with age: {age}, i earn money in every month {money} take.</h3>
}
const {grade, score} = {grade: '9', score:'99'};
function Student({grade = 'N/A', score=0}){
  return(
    <div className='study'>
      <h3>this is a student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer (){
  const developerStyle ={
    border: '3px solid purple',
    margin: '10px',
    padding: '10px',
    borderRadius: '30px'
  }
  return(
    <div style={developerStyle}>
      <h2>I will be web developer soon</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, explicabo.</p>
    </div>
  )
}
export default App
