const { useState } = React


export function MailCompose({ sendMail, hamburgerOpen}) {
    const [compose, setCompose] = useState(false)
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [createdAt, _] = useState(Date.now())

    function onCompose() {
        setCompose(true)
    }

    function onClose() {
        setCompose(false)
    }

    function onSendMessege() {
        sendMail({ to, subject, body, createdAt })
        setCompose(false)
    }

    return (

        // < button > Compose</button >
        <React.Fragment>
            <button className="mail-compose-btn" onClick={onCompose}>
                <span className="material-icons compose-icon">mode_edit_outline</span>
                <span className={`compose-btn-text ${hamburgerOpen ? '' : 'close-compose-btn-text'}`}>Compose</span>
            </button>

            {compose && <section className="mail-compose">
                {/* head */}
                <div className="mail-compose-head">
                    <h2>New Message</h2>
                    <button className="material-icons" onClick={onClose}>close</button>
                </div>

                {/* to */}
                <input className="mail-compose-to" type="text" placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />

                {/* subject */}
                <input className="mail-compose-subject" type="text" placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                {/* body */}
                <textarea className="mail-compose-body" name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                {/* send button */}
                <div className="mail-compose-send">
                    <button className="send-btn" onClick={onSendMessege}>Send</button>
                </div>
            </section>
            }

        </React.Fragment>
    )
}

