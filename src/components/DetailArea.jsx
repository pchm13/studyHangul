const DetailArea = (props) => {
    const {songs, showLyric} = props
    
    if (showLyric){
        return (
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
        )
    }
}

export default DetailArea