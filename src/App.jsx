import "./styles.css";
import { useState } from "react"

const App = () => {
    // 入力値
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')
    const [lyric, setLyric] = useState('')
    // 既に登録された曲
    const [songs, setSong] = useState([])
    
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
    
    return (
        <>
            <div className="inputArea">
                <form>
                    <label htmlFor="title">タイトル</label>
                    <input type="text" id="title" name="title" value={title} onChange={onChangeInputTitle} />
                    <label htmlFor="language">言語</label>
                    <select id="language" name="language" onChange={onChangeInputLanguage}>
                        <option value="">選択してイムニダ</option>
                        <option value="Japanese">日本語</option>
                        <option value="Hangul">ハングル</option>
                    </select>
                    <label htmlFor="lyric">歌詞</label>
                    <textarea id="lyric" name="lyric" rows="10" cols="50" value={lyric} onChange={onChangeInputLyric} />
                    <input type="button" value="登録" onClick={onClickAdd} />
                </form>
            </div>
            
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
    );
}

export default App