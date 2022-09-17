import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Typography, Input, Button } from 'antd';
import styles from './ChatNow.module.scss';
import { useState } from "react";

const { Paragraph } = Typography;

const ChatNow = () => {
    const [content, setContent] = useState();
    const [sentContent, setSentContent] = useState([]);
    const onInput = (e) => setContent(e.target.value);
    const onSubmit = () => {
        setSentContent([...sentContent, <p>{content}</p>]);
        setContent('');
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }
    return (
        <Layout className={styles.chatNowLayout}>
            <Content className={styles.chatNowContent}>
                <Paragraph className={styles.contentParagraph}>Chat Now Content</Paragraph>
                <Content className={styles.chatNowComments}>
                    {sentContent}
                </Content>
                <Input onInput={onInput} onKeyPress={onKeyPress} value={content} />
                <div className={styles.buttonWrapper}>
                    <Button onClick={onSubmit}>Send</Button>
                </div>
            </Content>
        </Layout >
    )
};

export default ChatNow;
