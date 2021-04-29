import ('./LogMessage.css');

const LogMessage = ({msg}) => {

    return (
        <>
            <div className='logMessage'>{msg}
                <div className='bottomLine'>

                </div>
            </div>
        </>
    )
}

export default LogMessage;