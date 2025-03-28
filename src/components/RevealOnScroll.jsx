import { useEffect, useRef } from "react"; // Fix: Changed 'use' to proper imports

export const RevealOnScroll = ({children}) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                ref.current.classList.add("visible");
            }
        }, 
        {threshold: 0.2, rootMargin: "0px 0px -50% 0px"}
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []); // Fix: Added dependency array

    return (
        <div ref={ref} className="reveal">
            {children} 
        </div>
    );       
};

