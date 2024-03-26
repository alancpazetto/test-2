import { useEffect } from 'react';
import analiticaEvents from './analitica';

import styles from './login.module.css';

export interface LoginProps {}

export function Login(props: LoginProps) {
  useEffect(() => {
    analiticaEvents.events.view.onLoad();
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
    </div>
  );
}
