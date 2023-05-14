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

// function Button({name}) {

//   function handleClick() {
//     console.log('you clicked me');
//   }

//   return (
//     <button onClick={handleClick}>{ name }</button>
//   )
// }

// function App() {

//   return (
//     <div>
//       <Button name="Play Movie" />
//       <Button name="Upload Image" />
//       <Button name="Stream Video" />
//     </div>
//   )
// }

// export default App;

// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return <div>Hello, World!</div>
//   }
// }

// export default App;

// import React from 'react';

// function App() {
//   return (
//     <div>Hello, World!</div>
//   )
// }

// export default App;

// props passed to another component

// import React, { Component } from "react";

// class Hello extends Component {
//   render() {
//     const { name } = this.props;

//     return <div>Hello, { name }!</div>;
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello name = 'krish' />
//         <Hello name = 'guest' />
//         <Hello name = 'sathish' />
//       </div>
//     )
//   }
// }

// export default App;

// import React, { Component } from "react";

// class App extends Component {
//   handleClick = () => {
//     console.log('Button Clicked!');
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>Click Me!</button>
//     )
//   }
// }

// export default App;

// stateful components

// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: { this.state.count }</p>
//         <button onClick={this.handleClick}>plus</button>
//         <button>minus</button>
//         <button>zero</button>
//       </div>
//     )
//   }
// }

// export default App;

// import React from 'react'

// function App() {
//   const sculptureList = [{
//       name: 'Homenaje a la Neurocirugía',
//       artist: 'Marta Colvin Andrade',
//       description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
//       url: 'https://i.imgur.com/Mx7dA2Y.jpg',
//       alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
//     }, {
//       name: 'Floralis Genérica',
//       artist: 'Eduardo Catalano',
//       description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
//       url: 'https://i.imgur.com/ZF6s192m.jpg',
//       alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
//     }, {
//       name: 'Eternal Presence',
//       artist: 'John Woodrow Wilson',
//       description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
//       url: 'https://i.imgur.com/aTtVpES.jpg',
//       alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
//     }, {
//       name: 'Moai',
//       artist: 'Unknown Artist',
//       description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
//       url: 'https://i.imgur.com/RCwLEoQm.jpg',
//       alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
//     }, {
//       name: 'Blue Nana',
//       artist: 'Niki de Saint Phalle',
//       description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
//       url: 'https://i.imgur.com/Sd1AgUOm.jpg',
//       alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
//     }, {
//       name: 'Ultimate Form',
//       artist: 'Barbara Hepworth',
//       description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
//       url: 'https://i.imgur.com/2heNQDcm.jpg',
//       alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
//     }, {
//       name: 'Cavaliere',
//       artist: 'Lamidi Olonade Fakeye',
//       description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
//       url: 'https://i.imgur.com/wIdGuZwm.png',
//       alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
//     }, {
//       name: 'Big Bellies',
//       artist: 'Alina Szapocznikow',
//       description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
//       url: 'https://i.imgur.com/AlHTAdDm.jpg',
//       alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
//     }, {
//       name: 'Terracotta Army',
//       artist: 'Unknown Artist',
//       description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
//       url: 'https://i.imgur.com/HMFmH6m.jpg',
//       alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
//     }, {
//       name: 'Lunar Landscape',
//       artist: 'Louise Nevelson',
//       description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
//       url: 'https://i.imgur.com/rN7hY6om.jpg',
//       alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
//     }, {
//       name: 'Aureole',
//       artist: 'Ranjani Shettar',
//       description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
//       url: 'https://i.imgur.com/okTpbHhm.jpg',
//       alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
//     }, {
//       name: 'Hippos',
//       artist: 'Taipei Zoo',
//       description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
//       url: 'https://i.imgur.com/6o5Vuyu.jpg',
//       alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
//     }];
  
//   let index = 0;

//   let sculpture = sculptureList[index];

//   function handleClick() {
//     index++;
//   }


//   return (
//     <div style={{margin: '20px'}}>
//       <button onClick={handleClick}>
//         Next
//       </button>

//       <h2>
//         { sculpture.name } by { sculpture.artist }
//       </h2>

//       <img 
//         src={ sculpture.url }
//         alt={ sculpture.alt }
//       />

//       <p>
//         { sculpture.description }
//       </p>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react'
// import { sculptureList } from './data';

// function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index];


//   return (
//     <section style={{margin: '20px'}}>
//       <button onClick={handleClick}>
//         Next
//       </button>

//       <h2>
//         { sculpture.name } by { sculpture.artist }
//       </h2>

//       <img 
//         src={ sculpture.url }
//         alt={ sculpture.alt }
//       />

//       <p>
//         { sculpture.description }
//       </p>
//     </section>
//   )
// }

// function App() {
  
//   return (
//     <div>
//       <Gallery />
//       <Gallery />
//     </div>
//   )
// }

// export default App;

import React from 'react'
import Gallery from './components/Gallery';

function App() {
  
  return (
    <div>
      <Gallery />
    </div>
  )
}

export default App;