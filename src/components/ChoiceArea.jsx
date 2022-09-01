import { useState } from "react"

const ChoiceArea = () => {
    const [songTitle, setSongTitle] = useState(['talk That talk','SCIENTIST', 'Alcohol-Free'])
    return (
        <>
            <div class="choiceArea">
                {songTitle.map((song)=>{
                    return (
                        <div class="song" key={song}>
                            {/* ジャケ写表示 */}
                            <img class="photo" src="" />
                            {/* 登録曲名表示 */}
                            <p class="title">{song}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ChoiceArea