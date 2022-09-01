import { useState } from "react"

const ChoiceArea = () => {
    const [songTitle, setSongTitle] = useState(['talk That talk','SCIENTIST', 'Alcohol-Free'])
    const [songPhoto, setSongPhoto] = useState(['../img/animal_inu.png', '../img/dog_corgi_tricolor.png', '../img/dog_shetland_sheepdog_blue_merle.png'])
    return (
        <>
            <div class="choiceArea">
                <div class="song" key={songTitle[0]}>
                    {/* todo一応コードは書いてるけど画像表示はされてないから、また考える */}
                    <img class="photo" src={songPhoto[0]} />
                    <p class="title">{songTitle[0]}</p>
                </div>
                <div class="song" key={songTitle[1]}>
                    <img class="photo" src={songPhoto[1]} />
                    <p class="title">{songTitle[1]}</p>
                </div>
                <div class="song" key={songTitle[2]}>
                    <img class="photo" src={songPhoto[2]} />
                    <p class="title">{songTitle[2]}</p>
                </div>
            </div>
        </>
    )
}

export default ChoiceArea