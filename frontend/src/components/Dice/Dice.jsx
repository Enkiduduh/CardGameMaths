import { useState, useEffect } from "react"

function Dice() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const randomNb = Math.floor((Math.random() * 6 )+ 1)
setValue(randomNb)
  }, [value])

  return (
    <div className="dice-container">
      {value}
    </div>
  )
}

export default Dice
