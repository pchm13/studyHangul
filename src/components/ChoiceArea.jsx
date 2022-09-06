const ChoiceArea = (props) => {
    const {
        songs,
        onClickLyricOpen
    } = props
    
    return (
        <div className="choiceArea">
            {songs.map((song) => {
                return (
                    <div className="song" key={song[0]}>
                        <p className="title" onClick={onClickLyricOpen}>{song[0]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ChoiceArea