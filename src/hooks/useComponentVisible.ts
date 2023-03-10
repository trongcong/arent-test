import {useEffect, useRef, useState} from "react";

export default function useComponentVisible<T extends HTMLElement>(initialIsVisible: boolean) {
    const [isVisible, setIsVisible] = useState<boolean>(initialIsVisible);
    const ref = useRef<T>(null);

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target as T)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return {ref, isVisible, setIsVisible};
}