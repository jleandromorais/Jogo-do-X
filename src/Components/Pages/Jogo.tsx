import { useReducer } from 'react';
import styles from '../css/Jogo.module.css';

type Estado = (string | number)[];
type Acao = { type: 'CLICK'; index: number };

const inicial: Estado = Array.from({ length: 9 }, (_, i) => i);

function reducer(state: Estado, action: Acao): Estado {
  switch (action.type) {
    case 'CLICK':
      if (typeof state[action.index] === 'number') {
        const novoEstado = [...state];
        novoEstado[action.index] = 'X';
        return novoEstado;
      }
      return state;
    default:
      return state;
  }
}

export const Jogo: React.FC = () => {
  const [estado, dispatch] = useReducer(reducer, inicial);

  const handleClick = (index: number) => {
    dispatch({ type: 'CLICK', index });
  };

  return (
    <div className={styles.container}>
      <h2>Próximo Jogador: X</h2>
      <div className={styles.board}>
        {estado.map((valor, i) => (
          <div key={i} className={styles.cell} onClick={() => handleClick(i)}>
            {valor}
          </div>
        ))}
      </div>
    </div>
  );
};
