import type { NextPage } from 'next'
import SimpleButton from '../components/SimpleButton'

const HelloWorld: NextPage = () => {
  const handleOnClick = () => {
    console.log('click from under the wood')
  }

  return (
    <>
      <h1>title</h1>
      <p>cisntent</p>
      <SimpleButton text={'from world'} onClick={handleOnClick} />
    </>
  )
}

export default HelloWorld
