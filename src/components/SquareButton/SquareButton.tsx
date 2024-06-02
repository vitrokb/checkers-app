import { SquareType } from '@/table-cells';
import styles from './SquareButton.module.css';

type Props = { cell: SquareType };

export default function SquareButton({ cell }: Props) {
  return <button className={styles.square}>{cell.name}</button>;
}
