import { useEffect, useState } from 'react'
import './App.css'
import permutation, { numberPermutation } from './utils/permutation'

function App() {
  const [elements, setElements] = useState([])
  const [newElem, setNewElem] = useState("")
  const [permutatedElems, setPermutatedElems] = useState([])

  const handleAddButton = e => {
    e.preventDefault()
    if (newElem !== ""){
      const addedElem = {
        id : (newElem.charCodeAt(0)*Math.random()),
        content: newElem
      }
      setElements((elements) => elements.concat(addedElem))
      setNewElem("")
    }
  }

  const handleDelete = (id) => {
    const filteredElems = elements.filter(elem => elem.id !== id)
    setElements(filteredElems)
  }

  useEffect(() => {
    if(elements.length > 0){
      const permArr = Array.from(permutation(elements.map(elem => elem.content)))
      setPermutatedElems(permArr)
      setNewElem("")
    }
    
    if(elements.length == 0 ){
      setPermutatedElems([])
      setNewElem("")
    }
  }, [elements])

  return (
    <div className='container-all'>
      <h3>Elementos: </h3>
      <div className='elements'>
        {elements.map(elem =>
        <div key={elem.id} className='container-delete'>
          <div className='element'>
            {elem.content}
          </div>
          <button onClick={() => handleDelete(elem.id)} className='delete-button'>x</button>
        </div>
      )}
      </div>
      <form onSubmit={handleAddButton} className='elements-container'>
        <input className='input' onInput={e => setNewElem(e.target.value)} value={newElem} type="text" />
        <button className='add-button' >Agregar</button>
      </form>
      <div className='p-container'>
        {permutatedElems.length > 0 && <p>Numero de permutaciones: <strong>{elements.length > 0 && numberPermutation(elements.map(elem => elem.content))}</strong></p>}
        <div className='permutated-container'>
            {permutatedElems.map(elem => 
              <div key={elem} className='element'>{elem}</div>
            )}
        </div>
      </div>
    </div>
  )
}

export default App
