import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <button className="btn btn-primary">Test button</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue={40}
        className="range"
      />
    </div>
  )
}

export default Home
