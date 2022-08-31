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
                <label for="photo"></label>
                <input type="file" id="photo" accept=".png, .jpeg" />
                <input type="submit" value="登録" />
            </form>
        </div>
        
        <div class="songs">
            <div class="song">
                {/* todo ジャケ写用意 */}
                <img src="" />
                {/* 登録曲名 */}
                <p>talk That talk</p>
            </div>
            <div class="song">
                <img src="" />
                <p>SCIENTIST</p>
            </div>
            <div class="song">
                <img src="" />
                <p>Alcohol-Free</p>
            </div>
        </div>
    </>
  );
}

export default App