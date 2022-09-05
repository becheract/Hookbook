import React, { useState } from "react";

interface ThemeProps {
  light: {
    foreground: string;
    background: string;
  };
  dark: {
    foreground: string;
    background: string;
  };
}

export default function useTheme(theme: ThemeProps) {
  const [style, setStyle] = useState(theme.light);
  const [visible, setVisible] = useState(true);

  const toggleStyle = () => {
    setStyle((style) => (style === theme.light ? theme.dark : theme.light));
  };

  return <div>useTheme</div>;
}
