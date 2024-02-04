import React from 'react'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Footer from './Components/Footer'

function App() {
  let data = {
    name: 'Dan Mace',
    label: '/Jonny_Films/',
    city: 'NYC',
    date: '27.11.22',
    description: 'Simply a film fan creating original content for YouTube. Let’s Collaborate.',
    title: 'creator',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    coverimage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videos: [
      {
        Vtitle: 'The Sound of Silence',
        vimage: 'https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shares: 317,
        offered: '75%',
        raised: 9510,
        coearning: 3804
      }
    ]
}
  return (
    <>
      <Navbar />
      <Profile data = {data} />
      <Footer />
    </>
  )
}

export default App