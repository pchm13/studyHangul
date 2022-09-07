const DetailArea = (props) => {
    const {
        songs, 
        showLyric, 
        onClickLyricClose
    } = props
    
    if (showLyric){
        return (
            <div className="overlay">
                <div className="detailArea">
                    {songs.map((song) => {
                        return (
                            <>
                                <h2 className="title" key={song[0]}>{song[0]}</h2>
                                <div className="lyric">{song[2]}</div>
                            </>
                        )
                    })}
                    <button className="closeButton" onClick={onClickLyricClose}>close</button>
                </div>
            </div>
        )
    }
}

export default DetailArea