import { useState } from "react"

const InputArea = () => {
    const [title, setTitle] = useState()
    const [language, setLanguage] = useState(['Japanese', 'Hangul'])
    const [lyric, setLyric] = useState()
    
    return (
        <>
            <div className="inputArea">
                <form>
                    <label htmlFor="title">タイトル</label>
                    <input type="text" id="title" name="title" value={title} />
                    <label htmlFor="language">言語</label>
                    <select id="language" name="language">
                        <option value="">選択してイムニダ</option>
                        <option value={language[0]}>日本語</option>
                        <option value={language[1]}>ハングル</option>
                    </select>
                    <label htmlFor="lyric">歌詞</label>
                    <textarea id="lyric" name="lyric" rows="10" cols="50">{lyric}</textarea>
                    <input type="submit" value="登録" />
                </form>
            </div>
        </>
    )
}

export default InputArea