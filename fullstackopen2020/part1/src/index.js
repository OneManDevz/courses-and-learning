import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts: [part1, part2, part3] }) => {
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}

const Part = ({ part: { name, excercises } }) => {
  return (
    <p>
      {name} {excercises}
    </p>
  )
}

const Total = ({ parts: [part1, part2, part3] }) => {
  return (
    <p>Number of excercises {part1.excercises + part2.excercises + part3.excercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10,
      },
      {
        name: 'Using props to pass data',
        excercises: 7,
      },
      {
        name: 'State of a component',
        excercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
