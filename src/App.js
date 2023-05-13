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
// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   );
// }

// // App Component
// const App = () => {
//   const age = 10;
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Krish' age={ 26 + 10 } />
//       <Hello name='Sathish' age={age} />
//     </div>
//   );
// }

// export default App;

// App Component
// const App = () => {
//   const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

//   let listItems = people.map(item => {
//     return <li>{ item }</li>
//   });

//   return (
//     <div>
//       <ul>
//         {listItems}
//       </ul>
//     </div>
//   );
// }

// export default App;

// const App = () => {

//   const people = [{
//       id: 0,
//       name: 'Creola Katherine Johnson',
//       profession: 'mathematician',
//     }, {
//       id: 1,
//       name: 'Mario José Molina-Pasquel Henríquez',
//       profession: 'chemist',
//     }, {
//       id: 2,
//       name: 'Mohammad Abdus Salam',
//       profession: 'physicist',
//     }, {
//       name: 'Percy Lavon Julian',
//       profession: 'chemist',  
//     }, {
//       name: 'Subrahmanyan Chandrasekhar',
//       profession: 'astrophysicist',
//     }];
  
//   const chemists = people.filter(person => {
//     return person.profession == 'chemist';
//   });

//   // render the list from the array
//   let listItems = chemists.map(person => {
//     return (
//       <li>
//         {person.name} : {person.profession}
//       </li>
//     )
//   });

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// export default App;

// const App = () => {

//   const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];
  
//   const chemists = people.filter(person => {
//     return person.profession == 'chemist';
//   });

//   // render the list from the array
//   let chemistsList = chemists.map(person => {
//     return (
//       <li key={person.id}>
//         <img
//           src={'https://i.imgur.com/' + person.imageId +'s.jpg'}
//         />
//         <p>
//           <b>{person.name}</b> : {person.profession + ' '}
//         known for {person.accomplishment}
//         </p>
//       </li>
//     )
//   });

//   const others = people.filter(person => {
//     return person.profession != 'chemist';
//   });

//   // render the list from the array
//   let otherScientists = others.map(person => {
//     return (
//       <li key={person.id}>
//         <img
//           src={'https://i.imgur.com/' + person.imageId +'s.jpg'}
//         />
//         <p>
//           <b>{person.name}</b> : {person.profession + ' '}
//         known for {person.accomplishment}
//         </p>
//       </li>
//     )
//   });

//   return (
//     <div>
//        <h2>Scientists</h2>
//       <div>
//         <h3>Chemists</h3>
//         <ul>{chemistsList}</ul>
//       </div>
//       <div>
//         <h3>Everyone Else</h3>
//         <ul>{otherScientists}</ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// const recipes = [{
//       id: 'greek-salad',
//       name: 'Greek Salad',
//       ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
//     }, {
//       id: 'hawaiian-pizza',
//       name: 'Hawaiian Pizza',
//       ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
//     }, {
//       id: 'hummus',
//       name: 'Hummus',
//       ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
//   }];
  
// function App() {
//   return (
//     <div style={{ margin: '25px'  }}>
//       <h1>Recipes</h1>
//       {
//         recipes.map(recipe => {
//           return (
//             <div key={ recipe.id} >
//               <h2>{recipe.name}</h2>
//               <ul>
//                 {
//                   recipe.ingredients.map(ingredient => {
//                     return (
//                       <li key={ingredient}>{ ingredient }</li>
//                     )
//                   })
//                 }
//               </ul>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App;

// conditional rendering

// function Item({ isPacked, name }) {
  // if (isPacked) {
  //   return <li>{name} ✔ </li>;
  // } else {
  //   // return <li>{name}</li>;
  //   return null;
  // }

  // return (
  //   isPacked ? <li>{name} ✔ </li> : <li>{name} </li>
  // )

  // return (
  //   isPacked ? <li>{name} ✔ </li> : <li>{name} </li>
  // )

  // return (
  //   <li>
  //     {isPacked ? name + ' ✔ ' : name }
  //   </li>
  // )

  // return (
  //   <li>
  //     { name } { isPacked && ' ✔ ' }
  //   </li>
  // )

//   let itemContent = name;

//   if (isPacked) {
//     itemContent = itemContent + ' ✔ ';
//   }

//   return (
//     <li>
//       {itemContent}
//     </li>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h1>Sally Ride's Packing list</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </div>
//   )
// }

// export default App;

// ❌

// function App() {
//   return (
//     <div>
//       <button onClick={function handleClick() {
//         console.log('you clicked me');
//       }}>Click Me!</button>
//     </div>
//   )
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <button onClick={() => console.log('you clicked me')}>Click Me!</button>
//     </div>
//   )
// }

// export default App;


// function App() {
//   function handleClick() {
//     console.log('you clicked me');
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me!</button>
//     </div>
//   )
// }

// export default App;

function Button({name}) {

  function handleClick() {
    console.log('you clicked me');
  }

  return (
    <button onClick={handleClick}>{ name }</button>
  )
}

function App() {

  return (
    <div>
      <Button name="Play Movie" />
      <Button name="Upload Image" />
      <Button name="Stream Video" />
    </div>
  )
}

export default App;