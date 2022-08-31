import "./styles.css";

const App = () => {
  return (
    <>
        <header>
            <h3>歌詞でハングルを勉強するApp</h3>
        </header>
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
                <input type="submit" value="登録" />
            </form>
        </div>
    </>
  );
}

export default App