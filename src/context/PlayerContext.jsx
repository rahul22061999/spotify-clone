import { createContext, useRef, useState, useEffect} from "react";
import { songsData } from "../assets/assets";



export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, settrack] = useState(songsData[5]);
    const [playerStatus, setplayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setplayerStatus(true)
    }

    const pause = () => {
        audioRef.current.pause();
        setplayerStatus(false)
    };

    const playwithId = async(id) => {
        await settrack(songsData[id]);
        await audioRef.current.play();
        setplayerStatus(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration *100))+"%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            };
        }, 1000);
    
        // Cleanup the timeout
        return () => clearTimeout(timer);
    
    }, [audioRef.current]); 
    
    

const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track, settrack,
    playerStatus, setplayerStatus,
    time, setTime,
    play, pause,
    playwithId
}

return (
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
)
}


export default PlayerContextProvider;