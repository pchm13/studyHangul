const ChoiceArea = (props) => {
    const {
        songs,
        onClickLyricOpen
    } = props
    
    return (
        <div className="choiceArea">
            {songs.map((song, index) => {
                return (
                    <div className="song" key={index}>
                        <p className="title" onClick={() => onClickLyricOpen(index)}>{song[0]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ChoiceArea