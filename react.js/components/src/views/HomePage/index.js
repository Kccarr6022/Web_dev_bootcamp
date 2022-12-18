import React from 'react'
import './index.scss'
import Joke from './../../components/Joke'

const jokes = [
  {
    setup: 'I told my wife she was drawing her eyebeows too high.',
    punchline: 'She looked suprized.',
  },
  {
    setup: 'I threw a boomerang a few years ago.',
    punchline: 'I now live in constant fear.',
  },
  {
    setup: "You don't need a parachute to go skydiving.",
    punchline: 'You need a parachute to go skydiving twice.',
  },
  {
    setup: 'Parallel lines have so much in common.',
    punchline: "It's a shame they'll never meet.",
  },
  {
    setup: 'My grandfather has a heart of a lion,',
    punchline: 'and a lifetime ban at the zoo.',
  },
  {
    punchline: 'just the punchline',
  },
]

const jokelist = jokes.map(item => {
  return <Joke setup={item['setup']} punchline={item['punchline']} />
})

const array = [<h1>test</h1>, <h1>test</h1>, <h1>test</h1>, <h1>test</h1>]

const HomePage = () => {
  return (
    <div className='Home'>
      <h1 className='title'>Home Page</h1>
      {jokelist}
      {array}
    </div>
  )
}

export default HomePage


/*
1. What does the '.map()' array method do?

The map() array method will allow us to loop through arrays in javasript.
The special feature that we use this for in react is to loop through components and
display them to the page. This allows us to not manually code a page and for information of various
types to load dynamically.

2. What do we usually use '.map()' for in react?

We use .map to loop through elements in an array to store dynamic ranges of information onto the frontend of
a page.

3. Why is '.map()' better than just creating the components manually
by typing them out?

The .map() function is better than just creating the components manually as this data, can now be loaded dynamically
on to a page.


*/