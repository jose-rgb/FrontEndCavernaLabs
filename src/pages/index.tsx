import  animation   from '../../public/card.json';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react'
import styles from './home.module.scss';
import { useState } from 'react';
import Lottie from "react-lottie";
import { MaskedInput } from '../components/MaskedInput/MaskedInput';

const defaultOptionsAnimation = {
  loop: true,
  autoplay: true, 
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const checkCard = (str: String) => {
  let isCardValid = true
  let secondCheck = true

  if (str[0] != '4' ) {
    if (str[0] != '5' ) {
      if (str[0] != '6' ) {
        secondCheck = false
      }
    }
  }

  //It must NOT have 4 or more consecutive repeated digits.
  if (str[0] == str[1] && str[1] == str[2] && str[2] == str[3] ) {
    isCardValid = false
  }

  if (str[2] == str[3] && str[3] == str[5] && str[5] == str[6] ) {
    isCardValid = false
  }

  if (str[7] == str[8] && str[8] == str[10] && str[10] == str[11] ) {
    isCardValid = false
  }

  if (str[10] == str[11] && str[11] == str[12] && str[12] == str[13] ) {
    isCardValid = false
  }

  if (str[12] == str[13] && str[13] == str[15] && str[15] == str[16] ) {
    isCardValid = false
  }

  if (str[15] == str[16] && str[16] == str[17] && str[17] == str[18] ) {
    isCardValid = false
  }

  if (isCardValid == true && secondCheck == true) {
    toast("Cartão Válido")
  } 
  
  if (isCardValid == false || secondCheck == false ) {
    toast.error("Cartão inválido")
  } 
}


export default function Home() {
  const { data: session } =useSession();
  const [numberCard, setNumberCard] = useState('')
  const [ animationState,setanimationState] = useState({
    isStopped: false, isPaused: false
  })


  return session ? (
    <>
      <main className={styles.contentContainer}>

        <div className={styles.cardFront}>

          <header>
              <h2><span>caverna</span>Cred</h2>
              <img src="/images/visa.png"/>
          </header>

          <div className={styles.chip}>
            <img src="/images/chip.png" />
            <h3>platinum</h3>
          </div>

          <div className={styles.inputs}>
            <MaskedInput value={numberCard} onChange={(event)=> setNumberCard(event.target.value)}/>
          </div>

        </div>

        <div className={styles.buttons}>
          <button onClick={() => checkCard(numberCard)}>Verificar Cartão</button>
          <button onClick={() => setNumberCard("")}>Limpar</button>
        </div>
    
      </main>
    </>
  ) : (
    <main className={styles.contentContainer}>
       <div>
          <Lottie options={defaultOptionsAnimation}
          height={580}
          width={580}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
          />
        </div>

        <h1>
          Validador de cartões ;)
        </h1>
    </main>
  )
}
