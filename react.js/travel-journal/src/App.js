import Navbar from './components/Navbar'
import BlogEntry from './components/blogEntry'
import data from './data.js'

const blogPosts = data.map(item => {
  return <BlogEntry data={item} />
})
function App() {
  return (
    <div className='App'>
      <Navbar />
      {blogPosts}
    </div>
  )
}

export default App
