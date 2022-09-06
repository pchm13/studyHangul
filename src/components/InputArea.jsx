const InputArea = (props) => {
    const {
        showInput,
        title,
        onChangeInputTitle,
        onChangeInputLanguage,
        lyric,
        onChangeInputLyric,
        onClickAdd,
        onClickInputClose
    } = props
    
    if(showInput){
        return(
            <>
                <div className="overlay">
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
                        <button className="closeButton" onClick={onClickInputClose}>close</button>
                    </div>
                </div>    
            </>    
        )   
    }
}

export default InputArea