import "./css/Message.css"

type MessageProps = {
    children: React.ReactNode,
    color?: string
}

function Message(props: MessageProps) {
    const {children, color} = props
    const messageColor: string = color ?? "crimson"

    document.documentElement.style.setProperty("--message-color", messageColor)

    return (
        <div className={"message"}>
            <p>{children}</p>
        </div>
    )
}

export default Message