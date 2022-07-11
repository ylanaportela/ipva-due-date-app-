import { useEffect, useMemo, useState } from "react";
import data from './tableBahia.json'

function App() {
  const [input, setInput] = useState('')
  const [endPlate, setEndPlate] = useState()

  const regex = RegExp('[A-Z]{3}[0-9][0-9A-Z][0-9]{2}')

  function handleSubmit() {
    if (regex.test(input)) {
      setEndPlate(input.slice(-1))
    }
  }

  const fidnEndPlate = useMemo(() => {

    const foundId = data.table.find((item) => {
      return item.identification === Number(endPlate)
    })
    if(foundId !== undefined){
      return (
        <>
          <div>{foundId.identification}</div>
          <div>{foundId.expiration}</div>
        </>
      ) 
    }

  }, [endPlate])



  return (
    <div className="container">
      <div>

        <label>
          Digite a placa do seu carro
          <input value={input} onChange={e => setInput(e.target.value.toLocaleUpperCase())} type="text" maxLength={7} />
        </label>
        <div>
          Selecione o estado que o seu carro foi emplacado
          <select>
            <option value="bahia">BA</option>
            <option value="ceara" selected>CE</option>
          </select>
        </div>

        <button type="submit" onClick={handleSubmit}>Verificar</button>
        <div>
          
        {fidnEndPlate}
          
        </div>
      </div>
    </div>
  );
}
export default App;
