// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'

// 🐨 create your CountContext here with React.createContext

const CountContext = React.createContext()

function CountProvider({...props}) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider value={value} {...props} />
}

function useCount() {
  const context = React.useContext(CountContext)

  if (!context) {
    throw new Error('This hook must be used inside a Provider')
  }

  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
      {/* <CountDisplay /> */}
    </div>
  )
}

export default App
