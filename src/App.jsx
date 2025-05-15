import { useState } from 'react'
import data from './data/data'
import ImcTable from './components/ImcTable'
import IcmCalc from './components/IcmCalc'
import './App.css'

function App() {
  

  function calcImc(e, heigth, weight) {
    e.preventDefault()

    if (!heigth || !weight) return
    const weihtFloat = +weight.replace(',', '.')

    const heigthtFloat = +heigth.replace(',', '.')

    const imcResult = (weihtFloat / (heigthtFloat * heigthtFloat)).toFixed(1)



    setImc(imcResult)

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })


    if (!info) return

  }
const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  return (
    <div className='container'>

      {!imc ? (<IcmCalc calcImc={calcImc} />) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} />)}

    </div>



  )
}

export default App
