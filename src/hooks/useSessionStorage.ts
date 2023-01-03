import React from "react";

export const useSessionStorage = (storageKey: string, fallbackState: string): any => {
  const [value, setValue] = React.useState(
    JSON.parse(sessionStorage.getItem(storageKey)!) ?? fallbackState
  );

  React.useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
