import "./App.css"
import { Button } from "./StyledComponents";


function App() {


  return (
    <>
      <div>
        <Button type="negative" size="L">Large Primary Button</Button>
        <Button type="negative" size="M">Medium</Button>
        <Button type="negative" size="S">Small</Button>
      </div>
      <div>
        <Button type="primary" size="L">Large Primary Button</Button>
        <Button type="primary" size="M">Medium</Button>
        <Button type="primary" size="S">Small</Button>
      </div>
    </>
  )
}

export default App;
