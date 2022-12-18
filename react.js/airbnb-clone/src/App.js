import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const cards = data.map(item => {
  return <Card {...item} />
})

function App() {
  //<Hero />
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  )
}

export default App

/*
1. What does the '.map()' array method do?

The map method reutrns a new array. Whatever gets returned from the callback function provided
is placed at the same index in the new array. Usually we take the items from the original array and
modify them in some way.

2. What do we usually use '.map()' for in React?

Convert an array of raw data into an array of JSX elements
that can be displayed on the page.

3. What is using '.map()' better than just creating the components by manually typing them out?

It makes our code more "self-sustaining"- not requiring 
additional changes whenever the data changes.

for (let i = 0; i < 5; i++) {

}

*/
