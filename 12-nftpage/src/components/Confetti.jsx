import {useWindowSizes} from "react-use-window-sizes"
import Confetti from 'react-confetti'
export function ConfettiComponent() {
  const { width, height } = useWindowSizes()
  return (
    <Confetti
      numberOfPieces={180}
      gravity={0.03}
      width={width}
      height={height}
    />
  )
}