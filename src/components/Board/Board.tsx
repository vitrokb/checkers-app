import { table } from '@/table-cells';
import SquareButton from '../SquareButton';
import styles from './Board.module.css';

export default function Board() {
  const tablePlanner = Object.keys(table);

  return (
    <div className={styles.container}>
      {tablePlanner.map((cell) => (
        <SquareButton key={table[cell].name} cell={table[cell]} />
      ))}
    </div>
  );
}
