import { useState } from 'react'
import './App.css'

function App() {

  const [ waifus, setWaifus ] = useState([])
  const [ command, setCommand ] = useState('')

  const handleAddPejota = (e) => {
    e.preventDefault()
    setWaifus([])
    setCommand('')
    const { pejotas: { value } } = e.target
    const pejota = value.split('\n')
    setWaifus(pejota)
  }

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('comando copiado correctamente.')
  }

  const handleGenerateCommand = () => {
    setCommand(`$sm ${waifus.join(' $')}`)
  }

  return (
    <div className="App">
      <div className='waifu_creator'>
        <form onSubmit={handleAddPejota} className="form">
          <h2>Agregar waifus</h2>
          <span className='helper'>Usa el comando $mmi, copia todas los nombres de las waifus separandolas por un salto de linea "Enter"</span>
          <textarea name="pejotas" cols="20" rows="20" />
          <button className='btn'>Ordenar Waifus</button>
        </form>
        <div className='order'>
          <h2>Verifica que las waifus se hayan ordenado corréctamente.</h2>
          <ul className='list'>
            {waifus?.map((waifu, index) => (
              <li key={index}>{waifu}</li>
            ))}
          </ul>

          <button
            className='btn'
            onClick={handleGenerateCommand}
          >Generar comando</button>
          {
            command && (
              <button
                className='btn'
                onClick={() => copyTextToClipboard(command)}
              >Copiar comando</button>
            )
          }

        </div>
      </div>

    </div>
  )
}

export default App
