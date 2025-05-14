import { useState } from 'react'
import data from './data/data'
import ImcTable from './components/ImcTable'
import IcmCalc from './components/IcmCalc'
import './App.css'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  function calcImc(e, heigth, weight) {
    e.preventDefault()

    if(!heigth || !weight)  return 
    const weihtFloat = +weight.replace(',', '.')

    const heigthtFloat = +heigth.replace(',', '.')

    const imcResult = (weihtFloat / (heigthtFloat * heigthtFloat)).toFixed(1)

    

    setImc(imcResult)
  }
  return (
    <div className='container'>

      {!imc ? (<IcmCalc calcImc={calcImc} />) : (<ImcTable data={data} />)}

    </div>



  )
}

export default App
