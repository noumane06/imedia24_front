import { PokimonDetail } from '../../types/pokimon'

type Props = {
    itemDetails: PokimonDetail
}

export default function 
({itemDetails}: Props) {
  return (
    <div className="pokimon-section-body">
    {itemDetails.abilities?.map((ability, index: number) => (
      <div key={index} className="pokimon-section-item">
        <span className='pokimon-section-title'>{ability.ability.name}</span>
        <span className='pokimon-section-value'>Slot : {ability.slot} </span>
      </div>
    ))}
  </div>
  )
}