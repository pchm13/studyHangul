const InputArea = () => {
    return (
        <>
            <div class="inputArea">
                <form>
                    <label for="title">タイトル</label>
                    <input type="text" id="title" />
                    <label for="language">言語</label>
                    <select id="language">
                        <option value="">選択してイムニダ</option>
                        <option value="Japanese">日本語</option>
                        <option value="Hangul">ハングル</option>
                    </select>
                    <label for="lyric">歌詞</label>
                    <textarea id="lyric" rows="10" cols="50"></textarea>
                    {/* todo ジャケ写用意 */}
                    <label for="photo"></label>
                    <input type="file" id="photo" accept=".png, .jpeg" />
                    <input type="submit" value="登録" />
                </form>
            </div>
        </>
    )
}

export default InputArea