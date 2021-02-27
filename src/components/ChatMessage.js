import React from 'react'
import styled from 'styled-components'
function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/84.jpg" alt="" ></img>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Jayshree
                    <span>2/23/2021 11:45:33 AM</span>
                </Name>
                <Text>
                    How is the challenge
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover{
        background: #f4f9f9
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height:36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right : 10px;
    img{
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 700;
    font-size: 15px;
    line-height: 1.4;
    
    span {
        margin-left: 8px;
        font-weight:400;
        color: rgb(97,96,97);
        font-size: 13px;
    }
`
const Text = styled.span`

`