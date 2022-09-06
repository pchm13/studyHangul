import "./styles.css";
import { useState } from "react"
import InputArea from "./components/InputArea"

const App = () => {
    // 入力値
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')
    const [lyric, setLyric] = useState('')
    // 既に登録された曲
    // todo key設定
    const [songs, setSong] = useState([])
    // todo 命名考える
    const [show, setShow] = useState(false)

    const onChangeInputTitle = (e) => setTitle(e.target.value)
    const onChangeInputLyric = (e) => setLyric(e.target.value)
    const onChangeInputLanguage = (e) => setLanguage(e.target.value)
    
    const onClickAdd = () => {
        const newSong = [...songs, [title, language, lyric]]
        setSong(newSong)
        setTitle('')
        setLanguage('')
        setLyric('')
    }
    
    const onClickOpen = () => {
     setShow(true)   
    }
    
    const onClickClose = () => {
     setShow(false)   
    }

    return (
        <>
            <header onClick={onClickOpen}>
                <h3>歌詞でハングルを勉強するApp</h3>
            </header>

            <InputArea 
                show={show} 
                title={title} 
                onChangeInputTitle={onChangeInputTitle}
                onChangeInputLanguage={onChangeInputLanguage}
                lyric={lyric}
                onChangeInputLyric={onChangeInputLyric}
                onClickAdd={onClickAdd}
                onClickClose={onClickClose}
            />

            <div className="choiceArea">
                {songs.map((song) => {
                    return (
                        <div className="song" key={song[0]}>
                            <p className="title">{song[0]}</p>
                        </div>
                    )
                })}
            </div>

            <div className="detailArea">
                {songs.map((song) => {
                    return (
                        <>
                            <h2 className="title" key={song[0]}>{song[0]}</h2>
                            <div className="lyric">{song[2]}</div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default App