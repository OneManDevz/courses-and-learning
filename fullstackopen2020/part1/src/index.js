import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ part1, part2, part3, exCount1, exCount2, exCount3 }) => {
  return (
    <>
      <Part name={part1} exCount={exCount1} />
      <Part name={part2} exCount={exCount2} />
      <Part name={part3} exCount={exCount3} />
    </>
  )
}

const Part = ({ name, exCount }) => {
  return (
    <p>
      {name} {exCount}
    </p>
  )
}

const Total = ({ exCount1, exCount2, exCount3 }) => {
  return <p>Number of excercises {exCount1 + exCount2 + exCount3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exCount1={excercises1}
        exCount2={excercises2}
        exCount3={excercises3}
      />
      <Total exCount1={excercises1} exCount2={excercises2} exCount3={excercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
