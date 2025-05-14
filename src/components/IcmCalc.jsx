import { useState } from 'react'
import './IcmCalc.css'
import Button from './Button.jsx'

const IcmCalc = ({calcImc}) => {
const [heigth, setHeigth] = useState('')
const [weight, setWeight] = useState('')

  function clearForm(e){
    e.preventDefault()
    setHeigth('')
    setWeight('')
    }

    function validDigits(text){
      return text.replace(/[^0-9.]/g, '')
    }


    function handleHeightChange(e){
      const updateValitDigts= validDigits(e.target.value)
      setHeigth(updateValitDigts)
    }
     function handleweightChange(e){
      const updateValitDigts= validDigits(e.target.value)
      setWeight(updateValitDigts)
    }



  return (
    <div id='calc-container'>
      <h2>Calculadora de IMC</h2>
      <form >
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input type="text" name='height' id='height' placeholder='Ex: 1.70' onChange={(e) => handleHeightChange(e)}  value={heigth}/>
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input type="text" name='weight' id='weight' placeholder='Ex: 70.5' onChange={(e) => handleweightChange(e)} value={weight}/>
          </div>
        </div>
        <div className="action-control">
          <Button id='calc-btn' text='Calcular' action={(e=> calcImc(e, heigth, weight))} />
          <Button id='clear-btn' text='Limpar' action={clearForm} />

        </div>


      </form>
    </div>
  )
}

export default IcmCalc