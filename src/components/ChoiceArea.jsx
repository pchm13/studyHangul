import { useState } from "react"

const ChoiceArea = () => {
    const [songTitle, setSongTitle] = useState(['talk That talk','SCIENTIST', 'Alcohol-Free'])
    
    return (
        <>
            <div class="choiceArea">
                {songTitle.map((title)=>{
                    return (
                        <div class="song" key={title}>
                            <p class="title">{title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ChoiceArea