import { Box, Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useRef, useState } from "react";

const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subscribe :)",
  ];

function Promotions(){

    const containerRef = useRef();                  //to keep content within container
    const [msgIndex, setMsgIndex] = useState(0);
    const[show, setShow] = useState(true);

    useEffect(() =>{

        setTimeout(() => {
            setShow(false);
        }, 3000);

        const intervalId = setInterval(() => {
            setMsgIndex( i => (i + 1) % messages.length)

            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 3000);

        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <PromotionsContainer ref={containerRef}>
            <Slide direction={show ? "left" : 'right'} in={show} timeout={{ enter: 500, exit:100 }} container={containerRef.current}>
                <Box display={'flex'} justifyContent={'center'} alignItems-={'center'}>
                    <MessageText>
                        {messages[msgIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    );
}

export default Promotions;