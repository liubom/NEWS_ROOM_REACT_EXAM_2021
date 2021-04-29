import {useEffect, useState} from "react";

import ('./InfoDot.css');

const InfoDot = (props) => {

    const [visibleDot, setVisibility] = useState(false);

    let isLikedArticles = props.likedIDs.length > 0 && props.likedIDs;

    useEffect(() => {
        setVisibility(isLikedArticles);
    }, [isLikedArticles]);

    if (visibleDot) {
        return (
            <div className='infoDot'>
                {props.likedIDs.length > 5 ? '5+' : props.likedIDs.length}
            </div>
        )
    }

    return (
        <></>
    )

}

export default InfoDot;