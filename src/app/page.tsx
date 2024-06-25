import Image from 'next/image';
import styles from './page.module.css';
import ConnectedGrid from '@/components/ConnectedGrid';

export default function Home() {
  return (
    <main>
      <ConnectedGrid />
    </main>
  );
}
