import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/Countdown.module.css';


export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext)


  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split(''); //transformar minutos para string
  const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

  
  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
        disabled
        className={style.countdownButton}
    >
        Ciclo encerrado
        
      </button>
      ): (
        <> 
          { isActive ? (
            <button
              type="button"
              className={`${style.countdownButton} ${style.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
        
            </button>
          ) : (
            <button
              type="button"
              className={style.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          ) }

            {
              // Mais de uma linha de retorno, colocar parenteses por volta
              // Se está ativo, irá mostrar abandonar ciclo, senão irá mostrar iniciar ciclo
            }
        </>
      ) }
    </div>
  );
}