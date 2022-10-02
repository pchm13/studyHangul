const InputArea = (props) => {
    const {
        isInputArea,
        inputTitle,
        onChangeInputTitle,
        inputLyric,
        onChangeInputLyric,
        onClickAdd,
        onClickInputClose
    } = props

    if (isInputArea) {
        return (
            <>
                <div className="overlay">
                    <div className="inputArea">
                        <form>
                            <label htmlFor="title">タイトル</label>
                            <input type="text" id="title" name="title" value={inputTitle} onChange={onChangeInputTitle} />
                            <label htmlFor="lyric">歌詞</label>
                            <textarea id="lyric" name="lyric" rows="10" cols="50" value={inputLyric} onChange={onChangeInputLyric} />
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