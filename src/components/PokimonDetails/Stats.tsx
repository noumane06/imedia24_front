import { PokimonDetail } from '../../types/pokimon';

type Props = {
    itemDetails: PokimonDetail
}

export default function Stats({itemDetails}: Props) {
  return (
    <div className="pokimon-section-body">
      {itemDetails.stats?.map((stat, index: number) => (
        <div key={index} className="pokimon-section-item">
          <span className="pokimon-section-title">{stat.stat.name}</span>
          <div className="pokimon-section-items">
            <div className="pokimon-section-element">
              <span className="key-item">Base</span>
              <span className="value-item">{stat.base_stat}</span>
            </div>
            <div className="pokimon-section-element">
              <span className="key-item">Effort</span>
              <span className="value-item">{stat.effort}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}