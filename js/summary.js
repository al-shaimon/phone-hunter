/* 
FETCH
1. Fetch must provide url
dynamic or static
2. how to convert fetch promise return to json 
3. how to convert json to data
4. [cool headed]: 
users: 
--> array of objects
--> object with property users
---> object with a property called data

nested object


---------------
DOM manipulation
1. get something from the DOM
2. create element to append to the DOM
3. dynamically load data based on id 

----------------
array --> forEach, map, find, filter
------------------------
template string



*/

// QUIZ

// const person = [
//   {
//     name: 'rahim',
//     age: 22,
//     friends: ['rahim,karim,jabbar'],
//   },
//   {
//     name: 'rahim2',
//     age: 22,
//     friends: ['rahim,karim,jabbar'],
//   },
//   {
//     name: 'rahim3',
//     age: 22,
//     friends: ['rahim,karim,jabbar'],
//   },
// ];

// const people = person.slice(1, 2);
// console.log(people);

// const dreamGirl = [
//   {
//     sokina: {
//       name: 'bbu',
//       height: '5.4',
//       family: [{ father: 'rock', mother: 'shila', sister: 'chinki' }],
//       age: undefined,
//       contactInfo: [
//         {
//           facebook: {
//             link: 'https://www.facebook.com/',
//             followers: '12545',
//             status: 'single',
//             friendsList: [{ name: 'rofik' }, undefined],
//           },
//         },
//         { instagram: 'https://www.instagram.com/' },
//       ],
//     },
//   },
// ];

// console.log(dreamGirl[0].sokina.contactInfo[1].instagram);

const phones = [
  { name: 'sony', price: 500 },
  { name: 'tony', price: 400 },
  { name: 'apple', price: 700 },
  { name: 'sony', price: 700 },
];

console.log(phones.filter((phone) => phone.price != 500));
