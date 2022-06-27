import { useState } from "react";

function App() {
  const [input, setInput ] = useState('')

  const regex = RegExp('[A-Z]{3}[0-9][0-9A-Z][0-9]{2}')

  function handleSubmit(){
    console.log(regex.test(input))
    console.log(input.slice(-1))
  }

  

  return (
    <div className="container">
      <div>

        <label>
          Digite a placa do seu carro
          <input value={input} onChange={e => setInput(e.target.value.toLocaleUpperCase())}/>
        </label>
        <div>
        Selecione o estado que o seu carro foi emplacado
        <select>
          <option value="bahia">BA</option>
          <option value="ceara" selected>CE</option>
        </select>
        </div>

        <button type="submit" onClick={handleSubmit}>Verificar</button>
      </div>
    </div>
  );
}
export default App;
