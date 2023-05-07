// function App() {
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// }

// lets re-write the javascript function App using arrow syntax
// const App = () => {
//   console.log('hello from component');
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// }

// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   console.log(now, a + b);
//   return (
//     <div>
//       <p>Hello World, it is now {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//     </div>
//   );
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement(
  //     'p',
  //     null,
  //     'Hello world, it is', now.toString()
  //   ),
  //   React.createElement(
  //     'p',
  //     null,
  //     a,
  //     'plus ', b, 'is ', a+b
  //   )
  // );
// props: passing data to components
// Hello Component
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  );
}

// App Component
const App = () => {
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Krish' age={ 26 + 10 } />
      <Hello name='Sathish' age={age} />
    </div>
  );
}

export default App;