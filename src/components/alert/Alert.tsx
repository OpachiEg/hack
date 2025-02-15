import React, {MutableRefObject, RefObject, useEffect, useImperativeHandle, useRef, useState} from 'react'
import "./index.css";

interface AlertRef {
    show: (message: string) => void
}

let ref: MutableRefObject<AlertRef | undefined> = React.createRef() as MutableRefObject<AlertRef | undefined>;

export const showMessage = (message: string) => {
    ref?.current?.show(message);
};

const Alert = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const alertRef = useRef<AlertRef>();
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    useImperativeHandle(alertRef, () => {
        return {
            show(message: string) {
                setMessage(message);
                setIsOpen(true);
                clearTimeout(timeout.current);
                timeout.current = setTimeout(() => {
                    setIsOpen(false);
                    setMessage(message);
                }, 2000);
            }
        }
    }, []);

    useEffect(() => {
        ref.current = alertRef.current
    },[]);

    return (
      <div className={"alert"}>
          <div className={"alert__content"} style={{
              top: isOpen ? "50px" : "-50px"
          }}>
              {message}
          </div>
      </div>
    );

};

export default Alert;