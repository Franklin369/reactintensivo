import { useState, useEffect } from "react";
import { Tablero } from "./components/Tablero/Tablero";
const emojiList = [..."💀👻🧛🌮🎱🍬🍕🦖"];
//123454678
function App() {
  const [memobloquesbarajados, setmemobloquesbarajados] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);

  useEffect(() => {
    const barajadoEmojiLista = barajarArray([...emojiList, ...emojiList]);
    setmemobloquesbarajados(
      barajadoEmojiLista.map((emoji, i) => ({
        index: i,
        emoji,
        flipped: false,
      }))
    );
  }, []);

  const barajarArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
      console.log(a);
    }
    return a;
  };
  const handleMemoClick = (memoBlock) => {
    const MemoBlockinvertido = { ...memoBlock, flipped: true };
    let memobloquesbarajadosCopy = [...memobloquesbarajados];
    memobloquesbarajadosCopy.splice(memoBlock.index, 1, MemoBlockinvertido);

    setmemobloquesbarajados(memobloquesbarajadosCopy);
    if(selectedMemoBlock===null){
      setselectedMemoBlock(memoBlock)

    }else if (selectedMemoBlock.emoji ===memoBlock.emoji){
      setselectedMemoBlock(null);
    }else{
      setAnimating(true)
      setTimeout(()=>{
        memobloquesbarajadosCopy.splice(memoBlock.index,1,memoBlock)
        memobloquesbarajadosCopy.splice(selectedMemoBlock.index,1,selectedMemoBlock)
        setmemobloquesbarajados(memobloquesbarajadosCopy)
        setselectedMemoBlock(null);
        setAnimating(false);

      },1000)
    }


  };

  return <Tablero memoBlocks={memobloquesbarajados} handleMemoClick={handleMemoClick} animating={animating}/>;
}

export default App;
