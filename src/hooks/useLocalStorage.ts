import * as React from "react";

export const useLocalStorage = (storageKey: string, fallbackState: string): any => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)!) ?? fallbackState
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
