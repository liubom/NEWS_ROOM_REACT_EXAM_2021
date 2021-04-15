import {useEffect, useState} from "react";

import ('./InfoDot.css');

const InfoDot = (props) => {

    const [visibleDot, setVisibility] = useState(false);

    let arr = [1];
    console.log(props.likedIDs);
    let isLikedArticles = props.likedIDs.length > 0 && props.likedIDs;
    console.log(isLikedArticles);

    useEffect(() => {
        setVisibility(isLikedArticles);
    }, [isLikedArticles]);

    // const isVisible = (val) => {
    //     setVisibility(val);
    // }

    if (visibleDot) {
        return (
            <div className='infoDot'>

            </div>
        )
    }

    return (
        <></>
    )

}

export default InfoDot;