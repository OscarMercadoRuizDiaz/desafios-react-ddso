import "./ComparadorClicks.css"
import { useEffect, useState } from "react";
import { ContadorClicks } from "./ContadorClicks";

export function ComparadorClicks({ onChange, izquierda, derecha }) {
  const [clicksIzquierda, setClicksIzquierda] = useState(izquierda)
  const [clicksDerecha, setClicksDerecha] = useState(derecha)
  const [puntosClick, setPuntosClick] = useState([])
  
  function agregarPunto(punto) {
    setPuntosClick(prev => [...prev, punto])
  }

  const ganador =
    (clicksIzquierda > clicksDerecha) ? 'izquierda' :
    (clicksDerecha > clicksIzquierda) ? 'derecha' :
    'empate'
  
  useEffect(() => {
    onChange({
      izquierda: clicksIzquierda,
      derecha: clicksDerecha,
      puntosClick: puntosClick,
    })
  }, [ganador])

  return (
    <div className="ComparadorClicks">
      <ContadorClicks
        clicks={clicksIzquierda}
        setClicks={setClicksIzquierda}
        agregarPunto = {agregarPunto}
        ganador={ganador === 'izquierda'}
      />
      <ContadorClicks
        clicks={clicksDerecha}
        setClicks={setClicksDerecha}
        agregarPunto = {agregarPunto}
        ganador={ganador === 'derecha'}
      />
    </div>
  )
}