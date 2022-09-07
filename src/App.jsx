import "./styles.css";
import { useState } from "react"
import InputArea from "./components/InputArea"
import ChoiceArea from "./components/ChoiceArea"
import DetailArea from "./components/DetailArea"

const App = () => {
    // 入力値
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')
    const [lyric, setLyric] = useState('')
    // 既に登録された曲
    // todo key設定
    const [songs, setSong] = useState([])
    const [showInput, setShowInput] = useState(false)
    const [showLyric, setShowLyric] = useState(false)

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
    
    const onClickInputOpen = () => {
        setShowInput(true)   
    }
    
    const onClickInputClose = () => {
        setShowInput(false)   
    }
    
    const onClickLyricOpen = () => {
        setShowLyric(true)
    }
    
    const onClickLyricClose = () => {
        setShowLyric(false)
    }

    return (
        <>
            <header onClick={onClickInputOpen}>
                <h3>歌詞でハングルを勉強するApp</h3>
            </header>

            <InputArea 
                showInput={showInput} 
                title={title} 
                onChangeInputTitle={onChangeInputTitle}
                onChangeInputLanguage={onChangeInputLanguage}
                lyric={lyric}
                onChangeInputLyric={onChangeInputLyric}
                onClickAdd={onClickAdd}
                onClickInputClose={onClickInputClose}
            />

            <ChoiceArea
                songs={songs}
                onClickLyricOpen={onClickLyricOpen}
            />

            <DetailArea 
                songs={songs}
                showLyric={showLyric}
                onClickLyricClose={onClickLyricClose}
            />
        </>
    )
}

export default App