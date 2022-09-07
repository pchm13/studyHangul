const DetailArea = (props) => {
    const {
        isDetailArea, 
        onClickLyricClose,
        songDetail
    } = props
    
    if (isDetailArea){
        return (
            <div className="overlay">
                <div className="detailArea">
                    <h2 className="title" key={songDetail[0]}>{songDetail[0]}</h2>
                    <div className="lyric">{songDetail[2]}</div>
                    <button className="closeButton" onClick={onClickLyricClose}>close</button>
                </div>
            </div>
        )
    }
}

export default DetailArea