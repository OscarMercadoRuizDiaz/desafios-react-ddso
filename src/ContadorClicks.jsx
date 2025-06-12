import './ContadorClicks.css';

export function ContadorClicks({ clicks, setClicks, ganador, agregarPunto }) {
  return (
    <div className={`ContadorClicks ${ganador ? 'ganador' : ''}`}  >
      <div className="ContadorClicks-contador"   >Número de clicks: {clicks}</div>
      <div className="ContadorClicks-lienzo" onClick={(e) => {
        setClicks(clicks + 1)
        agregarPunto({x: e.clientX, y: e.clientY})
      }}>
      </div>
    </div>
  )
}