import React, {useEffect, useContext} from 'react';
import {View, Image} from 'react-native';
import {COLORS} from '../../assets/colors';
import {AuthUserContext} from '../../context/AuthUserProvider';

export default function Preload({navigation}) {
  const {getUserCache, signIn} = useContext(AuthUserContext);

  const loginUser = async () => {
    //const user = await getUserCache();

    if (false) {
      navigation.reset({
        index: 0,
        routes: [{name: 'AppStack'}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    }
  };

  useEffect(() => {
    //loginUser();
  }, []);

  return (
    <View className="center">
      <View className="p-2.5 bg-slate-500 text-white">Funfun</View>
    </View>
  );
}
