import { useState, useEffect } from 'react';

export const useBottomTrigger = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [isBottom, setIsBottom] = useState(false);

    function handleUserScroll() {
        // get scroll top value
        const scrollTop = document.documentElement.scrollTop;
    
        // get the entire height, including padding
        const scrollHeight = document.documentElement.scrollHeight;
    
        // check if user is near to the bottom of the body
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
          setIsBottom(true);
        }
    }
    
    // on mount
    useEffect(() => {
      window.addEventListener("scroll", handleUserScroll);
      return () => window.removeEventListener("scroll", handleUserScroll);
    }, []);

    return [isBottom, setIsBottom];
}