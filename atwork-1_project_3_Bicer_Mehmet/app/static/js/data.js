// (() => {

//   const API = {
//     initialize() {
//       this.$container = document.getElementById('container');
//       this.fetchPersons();
//     },
//     fetchPersons() {
//       fetch('data/persons.json') 
//       .then((response ) => response.json()) 
//       .then((json) => {
//         this.populaterHTML(json);
//       }) 
//       .catch((e) => console.log(e));
//     },
//     populaterHTML(data) {
//       this.$container.innerHTML = data.map((person) => {
//         return `<li><img src="${person.image}" alt="" /> ${person.name}</li>`;
//       }).join('')
//     }
//   }
// })