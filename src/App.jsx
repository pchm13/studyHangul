import "./styles.css";
import { useState } from "react"
import InputArea from "./components/InputArea"
import ChoiceArea from "./components/ChoiceArea"
import DetailArea from "./components/DetailArea"

const App = () => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputLyric, setInputLyric] = useState('')
    const [songs, setSongs] = useState([])
    const [isInputArea, setIsInputArea] = useState(false)
    const [isDetailArea, setIsDetailArea] = useState(false)
    const [songDetail, setSongDetail] = useState('')

    const onChangeInputTitle = (e) => setInputTitle(e.target.value)
    const onChangeInputLyric = (e) => setInputLyric(e.target.value)

    const onClickAdd = () => {
        const newSong = [...songs, {
            title: inputTitle,
            lyric: inputLyric
        }]
        setSongs(newSong)
        setInputTitle('')
        setInputLyric('')
    }

    const onClickInputOpen = () => {
        setIsInputArea(true)
    }

    const onClickInputClose = () => {
        setIsInputArea(false)
    }

    const onClickLyricOpen = (index) => {
        setIsDetailArea(true)
        setSongDetail(songs[index])
    }

    const onClickLyricClose = () => {
        setIsDetailArea(false)
    }

    return (
        <>
            <header onClick={onClickInputOpen}>
                <h3>歌詞でハングルを勉強するApp</h3>
            </header>

            <InputArea
                isInputArea={isInputArea}
                inputTitle={inputTitle}
                onChangeInputTitle={onChangeInputTitle}
                inputLyric={inputLyric}
                onChangeInputLyric={onChangeInputLyric}
                onClickAdd={onClickAdd}
                onClickInputClose={onClickInputClose}
            />

            <ChoiceArea
                songs={songs}
                onClickLyricOpen={onClickLyricOpen}
            />

            <DetailArea
                isDetailArea={isDetailArea}
                onClickLyricClose={onClickLyricClose}
                songDetail={songDetail}
            />
        </>
    )
}

export default App