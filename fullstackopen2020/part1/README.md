# Introduction to React

We will now start getting familiar with probably the most important topic of this course, namely the [React](https://reactjs.org/)-library. Let's start off with making a simple React application as well as getting to know the core concepts of React.

The easiest way to get started by far is by using a tool called [create-react-app](https://github.com/facebook/create-react-app). It is possible (but not necessary) to install _create-react-app_ on your machine if the _npm_ tool that was installed along with Node has a version number of at least _5.3_.

Let's create an application called _part1_ and navigate to its directory.

```
$ npx create-react-app part1
$ cd part1
```

Every command, here and in the future, starting with the character _\$_ is typed into a terminal prompt, aka the command-line. The character _\$_ is not to be typed out because it represents the prompt.

The application is run as follows

```
$ npm start
```

By default, the application runs in localhost port 3000 with the address [http://localhost:3000](http://localhost:3000)

Chrome should launch automatically. Open the browser console **immediately**. Also open a text editor so that you can view the code as well as the web-page at the same time on the screen:

<img width="758" height="547" src=":/433aa04f40f4456fa04b604dcd169ba4"/>

The code of the application resides in the _src_ folder. Let's simplify the default code such that the contents of the file _index.js_ look like:

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

The files _App.js_, _App.css_, _App.test.js_, _logo.svg_, _setupTests.js_ and _serviceWorker.js_ may be deleted as they are not needed in our application right now.

### Component

The file _index.js_ now defines a React-[component](https://reactjs.org/docs/components-and-props.html) with the name _App_ and the command on the final line

```
ReactDOM.render(<App />, document.getElementById('root'))
```

renders its contents into the _div_-element, defined in the file _public/index.html_, having the _id_ value 'root'.

By default, the file _public/index.html_ doesn't contain any HTML markup that is visible to us in the browser. You can try adding some HTML into the file. However, when using React, all content that needs to be rendered is usually defined as React components.

Let's take a closer look at the code defining the component:

```
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)
```

As you probably guessed, the component will be rendered as a _div_-tag, which wraps a _p_-tag containing the text _Hello world_.

Technically the component is defined as a JavaScript function. The following is a function (which does not receive any parameters):

```
() => (
  <div>
    <p>Hello world</p>
  </div>
)
```

The function is then assigned to a constant variable _App_:

```
const App = ...
```

There are a few ways to define functions in JavaScript. Here we will use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which are described in a newer version of JavaScript known as [ECMAScript 6](http://es6-features.org/#Constants), also called ES6.

Because the function consists of only a single expression we have used a shorthand, which represents this piece of code:

```
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```

In other words, the function returns the value of the expression.

The function defining the component may contain any kind of JavaScript code. Modify your component to be as follows and observe what happens in the console:

```
const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```

It is also possible to render dynamic content inside of a component.

Modify the component as follows:

```
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
```

Any JavaScript code within the curly braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component.

### JSX

It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using [JSX](https://reactjs.org/docs/introducing-jsx.html). Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.

After compiling, our application looks like this:

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
```

The compiling is handled by [Babel](https://babeljs.io/repl/). Projects created with _create-react-app_ are configured to compile automatically. We will learn more about this topic in [part 7](https://fullstackopen.com/en/part7) of this course.

It is also possible to write React as "pure JavaScript" without using JSX. Although, nobody with a sound mind would actually do so.

In practice, JSX is much like HTML with the distinction that with JSX you can easily embed dynamic content by writing appropriate JavaScript within curly braces. The idea of JSX is quite similar to many templating languages, such as Thymeleaf used along with Java Spring, which are used on servers.

JSX is "[XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)-like", which means that every tag needs to be closed. For example, a newline is an empty element, which in HTML can be written as follows:

```
<br>
```

but when writing JSX, the tag needs to be closed:

```
<br />
```

### Multiple components

Let's modify the application as follows (NB: imports at the top of the file are left out in these _examples_, now and in the future. They are still needed for the code to work):

```
const Hello = () => {  return (    <div>      <p>Hello world</p>    </div>  )}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

We have defined a new component _Hello_ and used it inside the component _App_. Naturally, a component can be used multiple times:

```
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />      <Hello />    </div>
  )
}
```

Writing components with React is easy, and by combining components, even a more complex application can be kept fairly maintainable. Indeed, a core philosophy of React is composing applications from many specialized reusable components.

Another strong convention is the idea of a _root component_ called _App_ at the top of the component tree of the application. Nevertheless, as we will learn in [part 6](https://fullstackopen.com/en/part6), there are situations where the component _App_ is not exactly the root, but is wrapped within an appropriate utility component.

### props: passing data to components

It is possible to pass data to components using so called [props](https://reactjs.org/docs/components-and-props.html).

Let's modify the component _Hello_ as follows

```
const Hello = (props) => {  return (
    <div>
      <p>Hello {props.name}</p>    </div>
  )
}
```

Now the function defining the component has a parameter _props_. As an argument, the parameter receives an object, which has fields corresponding to all the "props" the user of the component defines.

The props are defined as follows:

```
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />      <Hello name="Daisy" />    </div>
  )
}
```

There can be an arbitrary number of props and their values can be "hard coded" strings or results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.

Let's modify the code so that the component _Hello_ uses two props:

```
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />      <Hello name={name} age={age} />    </div>
  )
}
```

The props sent by the component _App_ are the values of the variables, the result of the evaluation of the sum expression and a regular string.

### Some notes

React has been configured to generate quite clear error messages. Despite this, you should, at least in the beginning, advance in **very small steps** and make sure that every change works as desired.

**The console should always be open**. If the browser reports errors, it is not advisable to continue writing more code, hoping for miracles. You should instead try to understand the cause of the error and, for example, go back to the previous working state:

<img width="758" height="232" src=":/965a966a85684728b80c962a66ca38aa"/>

It is good to remember that in React it is possible and worthwhile to write _console.log()_ commands (which print to the console) within your code.

Also keep in mind that **React component names must be capitalized**. If you try defining a component as follows

```
const footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}
```

and use it like this

```
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <footer />    </div>
  )
}
```

the page is not going to display the content defined within the Footer component, and instead React only creates an empty _footer_ element. If you change the first letter of the component name to a capital letter, then React creates a _div_-element defined in the Footer component, which is rendered on the page.

Note that the content of a React component (usually) needs to contain **one root element**. If we, for example, try to define the component _App_ without the outermost _div_-element:

```
const App = () => {
  return (
    <h1>Greetings</h1>
    <Hello name="Maya" age={26 + 10} />
    <Footer />
  )
}
```

the result is an error message.

<img width="758" height="247" src=":/9044d9c67eb94be7830622777c2cdd21"/>

Using a root element is not the only working option. An _array_ of components is also a valid solution:

```
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    <Footer />
  ]
}
```

However, when defining the root component of the application this is not a particularly wise thing to do, and it makes the code look a bit ugly.

Because the root element is stipulated, we have "extra" div-elements in the DOM-tree. This can be avoided by using [fragments](https://reactjs.org/docs/fragments.html#short-syntax), i.e. by wrapping the elements to be returned by the component with an empty element:

```
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}
```

It now compiles successfully, and the DOM generated by React no longer contains the extra div-element.

### Exercises 1.1.-1.2.

Exercises are submitted through GitHub and by marking completed exercises in the [submission application](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

You may submit all the exercises of this course into the same repository, or use multiple repositories. If you submit exercises of different parts into the same repository, please use a sensible naming scheme for the directories.

One very functional file structure for the submission repository is as follows:

```
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  phonebook
  countries
```

See [this](https://github.com/fullstack-hy2020/example-submission-repository)!

For each part of the course there is a directory, which further branches into directories containing a series of exercises, like "unicafe" for part 1.

For each web application for a series of exercises, it is recommended to submit all files relating to that application, except for the directory _node_modules_.

The exercises are submitted **one part at a time**. When you have submitted the exercises for a part of the course you can no longer submit undone exercises for the same part.

Note that in this part, there are more exercises besides those found below. _Do not submit your work_ until you have completed all of the exercises you want to submit for the part.

#### 1.1: course information, step1

_The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional._

Use create-react-app to initialize a new application. Modify _index.js_ to match the following

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

and remove extra files (App.js, App.css, App.test.js, logo.svg, setupTests.js, serviceWorker.js).

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: _Header_, _Content_, and _Total_. All data still resides in the _App_ component, which passes the necessary data to each component using _props_. _Header_ takes care of rendering the name of the course, _Content_ renders the parts and their number of exercises and _Total_ renders the total number of exercises.

The _App_ component's body will approximately be as follows:

```
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

**WARNING** create-react-app automatically makes the project a git repository unless the application is created within an already existing repository. Most likely you **do not want** the project to become a repository, so run the command _rm -rf .git_ in the root of the project.

#### 1.2: course information, step2

Refactor the _Content_ component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three _Part_ components of which each renders the name and number of exercises of one part.

```
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. This situation will improve soon.

# JavaScript

During the course, we have a goal and a need to learn a sufficient amount of JavaScript in addition to web development.

JavaScript has advanced rapidly in the last few years and in this course we use features from the newer versions. The official name of the JavaScript standard is [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). At this moment, the latest version is the one released in June of 2019 with the name [ECMAScript® 2019](http://www.ecma-international.org/ecma-262/10.0/index.html), otherwise known as ES10.

Browsers do not yet support all of JavaScript's newest features. Due to this fact, a lot of code run in browsers has been _transpiled_ from a newer version of JavaScript to an older, more compatible version.

Today, the most popular way to do the transpiling is by using [Babel](https://babeljs.io/). Transpilation is automatically configured in React applications created with create-react-app. We will take a closer look at the configuration of the transpilation in [part 7](https://fullstackopen.com/en/part7) of this course.

[Node.js](https://nodejs.org/en/) is a JavaScript runtime environment based on Google's [Chrome V8](https://developers.google.com/v8/) JavaScript engine and works practically anywhere - from servers to mobile phones. Let's practice writing some JavaScript using Node. It is expected that the version of Node.js installed on your machine is at least version _10.18.0_. The latest versions of Node already understand the latest versions of JavaScript, so the code does not need to be transpiled.

The code is written into files ending with _.js_ that are run by issuing the command _node name_of_file.js_

It is also possible to write JavaScript code into the Node.js console, which is opened by typing _node_ in the command-line, as well as into the browser's developer tool console. The newest revisions of Chrome handle the newer features of JavaScript [pretty well](http://kangax.github.io/compat-table/es2016plus/) without transpiling the code. Alternatively you can use a tool like [JS Bin](https://jsbin.com/?js,console).

JavaScript is sort of reminiscent, both in name and syntax, to Java. But when it comes to the core mechanism of the language they could not be more different. Coming from a Java background, the behavior of JavaScript can seem a bit alien, especially if one does not make the effort to look up its features.

In certain circles it has also been popular to attempt "simulating" Java features and design patterns in JavaScript. We do not recommend doing this as the languages and respective ecosystems are ultimately very different.

### Variables

In JavaScript there are a few ways to go about defining variables:

```
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```

[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) does not actually define a variable but a _constant_ for which the value can no longer be changed. On the other hand [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) defines a normal variable.

In the example above, we also see that the type of the data assigned to the variable can change during execution. At the start _y_ stores an integer and at the end a string.

It is also possible to define variables in JavaScript using the keyword [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). var was, for a long time, the only way to define variables. const and let were only recently added in version ES6. In specific situations, var works in a [different](https://medium.com/craft-academy/javascript-variables-should-you-use-let-var-or-const-394f7645c88f) [way](http://www.jstips.co/en/javascript/keyword-var-vs-let/) compared to variable definitions in most languages. During this course the use of var is ill-advised and you should stick with using const and let! You can find more on this topic on YouTube - e.g. [var, let and const - ES6 JavaScript Features](https://youtu.be/sjyJBL5fkp8)

### Arrays

An [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and a couple of examples of its use:

```
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})
```

Notable in this example is the fact that the contents of the array can be modified even though it is defined as a _const_. Because the array is an object the variable always points to the same object. However, the content of the array changes as new items are added to it.

One way of iterating through the items of the array is using _forEach_ as seen in the example. _forEach_ receives a _function_ defined using the arrow syntax as a parameter.

```
value => {
  console.log(value)
}
```

forEach calls the function _for each of the items in the array_, always passing the individual item as a parameter. The function as the parameter of forEach may also receive [other parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

In the previous example, a new item was added to the array using the method [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push). When using React, techniques from functional programming are often used. One characteristic of the functional programming paradigm is the use of [immutable](https://en.wikipedia.org/wiki/Immutable_object) data structures. In React code, it is preferable to use the method [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), which does not add the item to the array, but creates a new array in which the content of the old array and the new item are both included.

```
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```

The method call _t.concat(5)_ does not add a new item to the old array but returns a new array which, besides containing the items of the old array, also contains the new item.

There are plenty of useful methods defined for arrays. Let's look at a short example of using the [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.

```
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed
```

Based on the old array, map creates a _new array_, for which the function given as a parameter is used to create the items. In the case of this example the original value is multiplied by two.

Map can also transform the array into something completely different:

```
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

Here an array filled with integer values is transformed into an array containing strings of HTML using the map method. In [part 2](https://fullstackopen.com/en/part2) of this course, we will see that map is used quite frequently in React.

Individual items of an array are easy to assign to variables with the help of the [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed
```

Thanks to the assignment, the variables _first_ and _second_ will receive the first two integers of the array as their values. The remaining integers are "collected" into an array of their own which is then assigned to the variable _rest_.

### Objects

There are a few different ways of defining objects in JavaScript. One very common method is using [object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals), which happens by listing its properties within braces:

```
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```

The values of the properties can be of any type, like integers, strings, arrays, objects...

The properties of an object are referenced by using the "dot" notation, or by using brackets:

```
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed
```

You can also add properties to an object on the fly by either using dot notation or brackets:

```
object1.address = 'Helsinki'
object1['secret number'] = 12341
```

The latter of the additions has to be done by using brackets, because when using dot notation, _secret number_ is not a valid property name because of the space character.

Naturally, objects in JavaScript can also have methods. However, during this course we do not need to define any objects with methods of their own. This is why they are only discussed briefly during the course.

Objects can also be defined using so-called constructor functions, which results in a mechanism reminiscent of many other programming languages, e.g. Java's classes. Despite this similarity, JavaScript does not have classes in the same sense as object-oriented programming languages. There has been, however, an addition of the _class syntax_ starting from version ES6, which in some cases helps structure object-oriented classes.

### Functions

We have already become familiar with defining arrow functions. The complete process, without cutting corners, to defining an arrow function is as follows:

```
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
```

and the function is called as can be expected:

```
const result = sum(1, 5)
console.log(result)
```

If there is just a single parameter, we can exclude the parentheses from the definition:

```
const square = p => {
  console.log(p)
  return p * p
}
```

If the function only contains a single expression then the braces are not needed. In this case the function only returns the result of its only expression. Now, if we remove console printing, we can further shorten the function definition:

```
const square = p => p * p
```

This form is particularly handy when manipulating arrays - e.g. when using the map method:

```
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]
```

The arrow function feature was added to JavaScript only a couple of years ago, with version [ES6](http://es6-features.org/). Prior to this the only way to define functions was by using the keyword _function_.

There are two ways by which the function can be referenced; one is giving a name in a [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function).

```
function product(a, b) {
  return a * b
}

const result = product(2, 6)
// result is now 12
```

The other way to define the function is using a [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function). In this case there is no need to give the function a name and the definition may reside among the rest of the code:

```
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5
```

During this course we will define all functions using the arrow syntax.

### Exercises 1.3.-1.5.

_We continue building the application that we started working on in the previous exercises. You can write the code into the same project, since we are only interested in the final state of the submitted application._

**Pro-tip:** you may run into issues when it comes to the structure of the _props_ that components receive. A good way to make things more clear is by printing the props to the console, e.g. as follows:

```
const Header = (props) => {
  console.log(props)  return <h1>{props.course}</h1>
}
```

#### 1.3: course information step3

Let's move forward to using objects in our application. Modify the variable definitions of the _App_ component as follows and also refactor the application so that it still works:

```
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

#### 1.4: course information step4

And then place the objects into an array. Modify the variable definitions of _App_ into the following form and modify the other parts of the application accordingly:

```
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

**NB** at this point _you can assume that there are always three items_, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the [next part of the course](https://fullstackopen.com/en/part1/../part2).

However, do not pass different objects as separate props from the _App_ component to the components _Content_ and _Total_. Instead, pass them directly as an array:

```
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```

#### 1.5: course information step5

Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

```
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```

### Object methods and "this"

Due to the fact that during this course we are using a version of React containing React Hooks we have no need for defining objects with methods. **The contents of this chapter are not relevant to the course** but are certainly in many ways good to know. In particular when using older versions of React one must understand the topics of this chapter.

Arrow functions and functions defined using the _function_ keyword vary substantially when it comes to how they behave with respect to the keyword [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), which refers to the object itself.

We can assign methods to an object by defining properties that are functions:

```
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {    console.log('hello, my name is ' + this.name)  },}

arto.greet()  // "hello, my name is Arto Hellas" gets printed
```

Methods can be assigned to objects even after the creation of the object:

```
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.growOlder = function() {  this.age += 1}
console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed
```

Let's slightly modify the object:

```
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {    console.log(a + b)  },}

arto.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed
```

Now the object has the method _doAddition_ which calculates the sum of numbers given to it as parameters. The method is called in the usual way, using the object _arto.doAddition(1, 4)_ or by storing a _method reference_ in a variable and calling the method through the variable: _referenceToAddition(10, 15)_.

If we try to do the same with the method _greet_ we run into an issue:

```
arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
```

When calling the method through a reference the method loses knowledge of what was the original _this_. Contrary to other languages, in JavaScript the value of [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) is defined based on _how the method is called_. When calling the method through a reference the value of _this_ becomes the so-called [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) and the end result is often not what the software developer had originally intended.

Losing track of _this_ when writing JavaScript code brings forth a few potential issues. Situations often arise where React or Node (or more specifically the JavaScript engine of the web browser) needs to call some method in an object that the developer has defined. However, in this course we avoid these issues by using the "this-less" JavaScript.

One situation leading to the "disappearance" of _this_ arises when we set a timeout to call the _greet_ function on the _arto_ object, using the [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) function.

```
const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

setTimeout(arto.greet, 1000)
```

As mentioned, the value of _this_ in JavaScript is defined based on how the method is being called. When _setTimeout_ is calling the method, it is the JavaScript engine that actually calls the method and, at that point, _this_ refers to the global object.

There are several mechanisms by which the original _this_ can be preserved. One of these is using a method called [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):

```
setTimeout(arto.greet.bind(arto), 1000)
```

Calling _arto.greet.bind(arto)_ creates a new function where _this_ is bound to point to Arto, independent of where and how the method is being called.

Using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) it is possible to solve some of the problems related to _this_. They should not, however, be used as methods for objects because then _this_ does not work at all. We will come back later to the behavior of _this_ in relation to arrow functions.

If you want to gain a better understanding of how _this_ works in JavaScript, the Internet is full of material about the topic, e.g. the screencast series [Understand JavaScript's this Keyword in Depth](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth) by [egghead.io](https://egghead.io) is highly recommended!

### Classes

As mentioned previously, there is no class mechanism like the ones in object-oriented programming languages. There are, however, features in JavaScript which make "simulating" object-oriented [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) possible.

Let's take a quick look at the _class syntax_ that was introduced into JavaScript with ES6, which substantially simplifies the definition of classes (or class-like things) in JavaScript.

In the following example we define a "class" called Person and two Person objects:

```
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
```

When it comes to syntax, the classes and the objects created from them are very reminiscent of Java classes and objects. Their behavior is also quite similar to Java objects. At the core they are still objects based on JavaScript's [prototypal inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance). The type of both objects is actually _Object_, since JavaScript essentially only defines the types [Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

The introduction of the class syntax was a controversial addition. Check out [Not Awesome: ES6 Classes](https://github.com/petsel/not-awesome-es6-classes) or [Is “Class” In ES6 The New “Bad” Part?](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65) for more details.

The ES6 class syntax is used a lot in "old" React and also in Node.js, hence an understanding of it being beneficial even in this course. However, since we are using the new [Hooks](https://reactjs.org/docs/hooks-intro.html) feature of React throughout this course, we have no concrete use for JavaScripts class syntax.

### JavaScript materials

There exist both good and poor guides for JavaScript on the Internet. Most of the links on this page relating to JavaScript feature reference [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

It is highly recommended to immediately read [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) on Mozilla's website.

If you wish to get to know JavaScript deeply there is a great free book series on the Internet called [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS).

Another great resource for learning JavaScript is [javascript.info](https://javascript.info).

[egghead.io](https://egghead.io) has plenty of quality screencasts on JavaScript, React, and other interesting topics. Unfortunately, some of the material is behind a paywall.
