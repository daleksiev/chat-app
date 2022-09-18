import { useEffect, useState } from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Typography, Input, Button } from 'antd';
import styles from './ChatNow.module.scss';

const { Paragraph } = Typography;

const ChatNow = () => {
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const [sentMessage, setsentMessage] = useState([]);

    const socket = new WebSocket("ws://localhost:5050");

    useEffect(() => {
        socket.onopen = () => {
            if (name && message && sentMessage.includes(message)) {
                const data = { name, message }
                socket.send(JSON.stringify(data));
                setMessage('');
            }

            socket.onerror = (err) => console.log('err: ', err);
            socket.onmessage = (e) => console.log('data: ', e.data);
        }
    }, [sentMessage, socket]);

    const onInputName = (e) => setName(e.target.value);
    const onInputmessage = (e) => setMessage(e.target.value);
    const onSubmit = () => setsentMessage([...sentMessage, message]);
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }
    return (
        <Layout className={styles.chatNowLayout}>
            <Content className={styles.chatNowContent}>
                <Paragraph className={styles.contentParagraph}>Chat Now Content</Paragraph>
                <Input onInput={onInputName} value={name} placeholder="Your name" className={styles.nameInput} />
                <Content className={styles.chatNowComments}>
                    {sentMessage.map((singlemessage, index) => <p key={index}>{singlemessage}</p>)}
                </Content>
                <Input onInput={onInputmessage} onKeyPress={onKeyPress} value={message} />
                <div className={styles.buttonWrapper}>
                    <Button onClick={onSubmit}>Send</Button>
                </div>
            </Content>
        </Layout >
    )
};

export default ChatNow;
