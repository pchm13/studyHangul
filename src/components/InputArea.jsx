import { useState } from "react"

const InputArea = () => {
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')
    const [lyric, setLyric] = useState('')
    
    const onChangeInputTitle = (event) => setTitle(event.target.value)
    const onChangeInputLyric = (event) => setLyric(event.target.value)
    const onChangeInputLanguage = (event) => setLanguage(event.target.value)
    
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
                    <input type="submit" value="登録" />
                </form>
            </div>
        </>
    )
}

export default InputArea