import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `AS shopper | ${title}`;
  }, [title]);
};

export default useTitle;
