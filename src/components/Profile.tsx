import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://64.media.tumblr.com/2b9323ffbcfd700f710084ceada8f520/tumblr_nw6fo59DlH1s7nd13o1_1280.jpg" alt="Vinicius de Lima" />
      <div>
        <strong> Vinicius de Lima</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}</p>
      </div>
    </div>
  );
}