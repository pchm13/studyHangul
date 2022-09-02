import "./styles.css";

const App = () => {
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')
    const [lyric, setLyric] = useState('')
    // const [songTitle, setSongTitle] = useState(['talk That talk','SCIENTIST', 'Alcohol-Free'])
    
    const onChangeInputTitle = (e) => setTitle(e.target.value)
    const onChangeInputLyric = (e) => setLyric(e.target.value)
    const onChangeInputLanguage = (e) => setLanguage(e.target.value)
    const onClickAdd = () => {
        const newSongTitle = [...title, title]
        const newSongLanguage = [...language, title]
        const newSongTitle = [...title, title]
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
                    <input type="submit" value="登録" onClick={onClickAdd} />
                </form>
            </div>
            
            <div className="choiceArea">
                {songTitle.map((title)=>{
                    return (
                        <div className="song" key={title}>
                            <p className="title">{title}</p>
                        </div>
                    )
                })}
            </div>
            
            <div className="detailArea">
                {/* 登録曲名表示 */}
                <h2 className="title">SCIENTIST</h2>
                {/* 登録歌詞表示 */}
                <div className="lyric">aaaaa....</div>
            </div>
        </>
    );
}

export default App