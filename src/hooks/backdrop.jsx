import { useEffect, useRef, useState } from "react";
export default function useDetectClickOut(State,btnRef,menuRef) {
    const triggerRef = useRef(btnRef); // optional
    const nodeRef = useRef(menuRef); // required

    const [show, setShow] = useState(State);
    const handleClickOutside = (event) => {
        //if click is on trigger element, toggle modal
        if (triggerRef.current && triggerRef.current.contains(event.target)) {
            return setShow(!show);
        }

        //if modal is open and click is outside modal, close it
        if (nodeRef.current && !nodeRef.current.contains(event.target)) {
            return setShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    return {
        triggerRef,
        nodeRef,
        show,
        setShow,
    };
}
