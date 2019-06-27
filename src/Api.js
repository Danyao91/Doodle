// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     data: [],
//   }

//   // Code is invoked after the component is mounted/inserted into the DOM tree.
//   componentDidMount() {
//     /*const url =
//       'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*' b*/
//      const url = 
//         'https://randomuser.me/api/'

//     fetch(url)
//       .then(result => result.json())
//       .then(result => {
//         this.setState({
//           data: result,
//         })
//       })
//   }

//   render() {
//     const { data } = this.state

//     const result = data.map((entry, index) => {
//       return <li key={index}>{entry}</li>
//     })

//     return <ul>{result}</ul>
//   }
// }

// export default App


export function getRandomUsers(userCount = 50) {
    const promise = fetch(`https://randomuser.me/api/?results=${userCount}&nat=US`)
      .then(response => {
        if(response.status >= 400) {
          throw `Response invalid ( ${response.status} )`;
          return;
        }
        return response.json();
      })
      .then(({results}) => {
        return results;
      })
      .catch(error => {
        console.log(error);
      });
  
    return promise;
  }