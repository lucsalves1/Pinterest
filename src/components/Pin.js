import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Pin(props) {
    return (
        <div style={{
            ...styles.pin,
            ...styles[props.size],
            ...styles[props.teste]
        }}>

        </div>
    )
}


const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    },
    /* lilo e stich */
    sup: {
        backgroundImage: 'url(https://i.pinimg.com/236x/60/d9/fd/60d9fd31e48fc6a0143394f7340ae623.jpg)'
    },
    /* mao olho */
    sup1: {
        backgroundImage: 'url(https://i.pinimg.com/236x/3d/2a/21/3d2a2161bc1291a3219c83d467e520ca.jpg)'
    },
    /* patos */
    sup2: {
        backgroundImage: 'url(https://i.pinimg.com/236x/42/a1/66/42a16657512eb06a62f33c1ddd7ea931.jpg)'
    },
    /* fantasma dab */
    sup3: {
        backgroundImage: 'url(https://i.pinimg.com/236x/5d/f4/18/5df418287735c4bc97bc8e4100d0a451.jpg)'
    },
    /* foice */
    sup4: {
        backgroundImage: 'url(https://i.pinimg.com/236x/89/8e/26/898e26b52bc49e3f539c270060bd219f.jpg)'
    },
    /* corvinal */
    sup5: {
        backgroundImage: 'url(https://i.pinimg.com/236x/a4/81/de/a481decbc9736c44cb17e5aa1795e6ac.jpg)'
    },
    /* laninha */
    sup6: {
        backgroundImage: 'url(https://i.pinimg.com/236x/98/35/5c/98355c6282dc57e0616eb67e1e5165ca.jpg)'
    },
    /* tame */
    sup7: {
        backgroundImage: 'url(https://i.pinimg.com/236x/4a/e9/e0/4ae9e00b22d02708573a4e522981c430.jpg)'
    },
    /* hagrid */
    sup8: {
        backgroundImage: 'url(https://i.pinimg.com/236x/49/9f/74/499f74d678959f499a69b54384cf8eda.jpg)'
    },
    /* lorde */
    sup9: {
        backgroundImage: 'url(https://i.pinimg.com/236x/d0/cb/79/d0cb79aa5f760633dffb63488a1c6263.jpg)'
    },
    /* rumo ao hexa */
    sup10: {
        backgroundImage: 'url(https://i.pinimg.com/236x/c5/e1/4a/c5e14ac14209a3618f0aa8ead6361578.jpg)'
    },
    /* mr robot */
    sup11: {
        backgroundImage: 'url(https://i.pinimg.com/236x/c6/7f/fd/c67ffd8d3c581191f8e220dd0a9afbd5.jpg)'
    },
    /* neymar taça */
    sup12: {
        backgroundImage: 'url(https://i.pinimg.com/236x/1c/64/0c/1c640ca9309916ddf9995662b144b332.jpg)'
    },
    /* games */
    sup13: {
        backgroundImage: 'url(https://i.pinimg.com/236x/bf/fe/20/bffe20215af8838b9689e184a5b2ba03.jpg)'
    },
    /* harry potter */
    sup14: {
        backgroundImage: 'url(https://i.pinimg.com/236x/84/02/ae/8402ae727e7a9920855e61e223610b20.jpg)'
    },
    /* mr robot */
    sup15: {
        backgroundImage: 'url(https://i.pinimg.com/236x/5a/06/f9/5a06f97aca531e63acabb8a340f225c9.jpg)'
    },
    /* inception */
    sup16: {
        backgroundImage: 'url(https://i.pinimg.com/236x/f5/68/46/f56846aede1d004041ea5c8e19d8fad4.jpg)'
    },
    /* cyberpunk */
    sup17: {
        backgroundImage: 'url(https://i.pinimg.com/236x/5e/69/6a/5e696a9b41425d1e8d91adac6dee6c9d.jpg)'
    },
    /* joy division */
    sup18: {
        backgroundImage: 'url(https://i.pinimg.com/236x/bf/fe/20/bffe20215af8838b9689e184a5b2ba03.jpg)'
    },
    /* retrowave */
    sup19: {
        backgroundImage: 'url(https://i.pinimg.com/originals/f4/8e/79/f48e79ab04ef8a361cd997856f0f62a2.gif)'
    },
    /* paisagem */
    sup20: {
        backgroundImage: 'url(https://i.pinimg.com/236x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg)'
    },
    /* lua cyberpunk */
    sup21: {
        backgroundImage: 'url(https://i.pinimg.com/originals/e8/77/ff/e877ff41b18e2c2be60b842d9d5fe2c8.gif)'
    },
    /* dança */
    sup22: {
        backgroundImage: 'url(https://media.tenor.com/7zKZuIk31GEAAAAM/bird-dance.gif)'
    },
    /* lana */
    sup23: {
        backgroundImage: 'url(https://i.pinimg.com/236x/b4/51/f2/b451f2143828769122908c97e6684079.jpg)'
    },
    /*lana gif*/
    sup24: {
        backgroundImage: 'url(https://i.pinimg.com/236x/1c/5b/72/1c5b72437d4ba9d780a50ff1b7564d5d.jpg)'
    },
    sup25: {
        backgroundImage: 'url(https://i.pinimg.com/236x/b2/33/22/b23322f188faade322e3d6a1bab6bb33.jpg)'
    },
    sup26: {
        backgroundImage: 'url(https://i.pinimg.com/236x/f0/d9/0b/f0d90b249cd4582aaaeb47b9ecee3c14.jpg)'
    },
    sup27: {
        backgroundImage: 'url(https://i.pinimg.com/236x/f0/d9/0b/f0d90b249cd4582aaaeb47b9ecee3c14.jpg)'
    },
    sup28: {
        backgroundImage: 'url(https://i.pinimg.com/236x/fd/5f/f6/fd5ff6614d0d76c7b9b73dc1299494b5.jpg)'
    },
    
}
export default Pin