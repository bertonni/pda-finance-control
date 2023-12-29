import { Button } from "./components/Button"

function App() {
  return (
    <div className='h-screen w-screen flex flex-col items-center
      justify-center gap-2'>
      <img src="/images/logo-pda.png" alt="logo pda" />
      <h1 className="display-large">PDA</h1>
      <h2 className="display-small text-center">Gerenciamento Financeiro</h2>
      <Button title="Começar" style={{ width: 200 }} />
    </div>
  )
}

export default App
