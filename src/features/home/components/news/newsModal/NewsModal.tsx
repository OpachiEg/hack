import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Dialog, DialogContent} from "@mui/material";
import {NewsInfo} from "../../../types";
import "./index.css";

export interface NewsModalRefProps {
    show: (info: NewsInfo) => void
}


const NewsModal = forwardRef((props,ref) => {

    const [isOpen, setIsOpen] = useState(false);
    const [newsInfo,setNewsInfo] = useState<NewsInfo>();

    useImperativeHandle(ref,() => {
        return {
            show(info: NewsInfo) {
                setIsOpen(true);
                setNewsInfo(info);
            },
            hide() {
                setIsOpen(false)
            }
        }
    },[]);

    return (
        <Dialog
            open={isOpen}
            PaperProps={{
                style: {
                    borderRadius: "10px",
                    width: "90%",
                    maxWidth: "500px"
                }
            }}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <DialogContent className={"news-modal"}>
                <p>{newsInfo?.title}</p>
                <img src={newsInfo?.image_url}/>
                <div className={"news-modal_content"}>
                    {newsInfo && <p>{new Date(newsInfo.created_at).toLocaleString('ru-RU', {day: 'numeric',month: "short",year: "numeric"})}</p>}
                    <p>{newsInfo?.content}</p>
                </div>
            </DialogContent>
        </Dialog>
    );
});

export default NewsModal;