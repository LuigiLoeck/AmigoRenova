import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    'color-primary-500',
    'color-accent-500',
    'color-accent-secundary-500',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="absolute flex-1 justify-center items-center w-screen h-screen bg-slate-950/15">
      <ActivityIndicator size="extralarge" className={colors[colorIndex]} />
    </View>
  );
};

export default Loading;
