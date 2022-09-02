import { useState } from "react"

const ChoiceArea = () => {
    const [songTitle, setSongTitle] = useState(['talk That talk','SCIENTIST', 'Alcohol-Free'])
    
    return (
        <>
            <div className="choiceArea">
                {songTitle.map((title)=>{
                    return (
                        <div className="song" key={title}>
                            <p className="title">{title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ChoiceArea