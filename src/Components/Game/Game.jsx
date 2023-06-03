import styles from './Game.module.css'
import {useEffect, useState} from "react";


function Game({play, scor}){
 function asus(){
     play()
scor(score)
    }
    const DOWN_FORCE=3
    const JUMP_FORCE=115
    const GAME_HEIGHT=500
    const GAME_WIDTH=500
    const TUBE_WIDTH=40
    const TUBE_DIST=200
    const BIRD_SIZE=30
const[birdPosition, setBirdPosition]=useState(250)
    const [isGameStarted, setIsGameStarted] = useState(false)
    const [tubeHeight, setTubeHeight] = useState(200)
const [tubeLeft, setTubeLeft] = useState(GAME_WIDTH-TUBE_WIDTH)
const [score, setScore] = useState(-3)

    const bottomTubeHeight= GAME_HEIGHT-TUBE_DIST-tubeHeight



    useEffect(()=>{
        let time;

        if (isGameStarted && birdPosition< GAME_HEIGHT - BIRD_SIZE){
            time=     setInterval(()=>{
             setBirdPosition(birdPosition=>birdPosition+DOWN_FORCE)
            },24)
        }
return()=>{
            clearInterval(time)
}

    },[birdPosition, isGameStarted])

    useEffect(()=>{
        let tubeId;
        if(isGameStarted && tubeLeft>=-TUBE_WIDTH){
            tubeId= setInterval(()=>{
                setTubeLeft((tubeLeft)=>tubeLeft-5)

            },24)
            return ()=>{ clearInterval(tubeId)
            }
        }
else {
    setTubeLeft(500-70)
            setTubeHeight(Math.floor(Math.random()*(500-200)))
setScore(score=>score+1)
}

    },[isGameStarted,tubeLeft ] )


useEffect(()=>{
    const collideTop =birdPosition>=0 && birdPosition<tubeHeight
    const collideBottom =birdPosition<=500 && birdPosition>=500-bottomTubeHeight
    if (
        tubeLeft>=0&& tubeLeft<= TUBE_WIDTH &&
        (collideTop ||collideBottom)
    ){

        asus()
        setIsGameStarted(false)

    }


},[birdPosition, tubeHeight, bottomTubeHeight, tubeLeft])


const handleClick=()=>{
    let newBirdPosition=birdPosition-JUMP_FORCE
    if (!isGameStarted){
        setIsGameStarted(true)

    }
    else if (newBirdPosition<0){

        setBirdPosition(0)
    }
    else {

        setBirdPosition(newBirdPosition)
    }

console.log('jUMP_FORCE')

}

    console.log(score)

    return (
        <div>
          <div className={styles.gameWrapper}>
            <div className={styles.Game}>
              <span style={{ position: 'absolute' }}>{score}</span>
              <div className={styles.Bird} style={{ top: birdPosition }}>
                <img width={BIRD_SIZE} height={BIRD_SIZE} src="https://i.imgur.com/mjWeLOe.png"  />
              </div>
              <div
                className={styles.Tube}
                style={{ top: 0, height: tubeHeight, width: TUBE_WIDTH, left: tubeLeft }}
              >
                <img width={TUBE_WIDTH} height={tubeHeight} src='https://i.imgur.com/6wkYC65.png'  />
              </div>
              <div
                className={styles.Tube}
                style={{
                  top: 500 - (tubeHeight + bottomTubeHeight),
                  width: TUBE_WIDTH,
                  height: bottomTubeHeight,
                  left: tubeLeft,
                }}
              >
                <img width={TUBE_WIDTH} height={bottomTubeHeight} src='https://i.imgur.com/3ulQOFC.png'  />
              </div>
            </div>
          </div>
          <div className={styles.sky}>
            <img className={styles.sky} src='https://i.imgur.com/9lLv1i8.png' />
          </div>
          <button onClick={handleClick}>FLAP!</button>
        </div>
      );
      
}
export default Game
