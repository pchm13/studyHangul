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
                    <h2 className="title">{songDetail['title']}</h2>
                    <div className="lyric">{songDetail['lyric']}</div>
                    <button className="closeButton" onClick={onClickLyricClose}>close</button>
                </div>
            </div>
        )
    }
}

export default DetailArea