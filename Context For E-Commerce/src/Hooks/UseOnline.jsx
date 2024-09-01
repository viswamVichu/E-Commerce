import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    addEventListener("online", (event) => {
      setOnline(true);
    });
    addEventListener("offline", (event) => {
      setOnline(false);
    });
  });
  return online;
};

export default useOnline;
