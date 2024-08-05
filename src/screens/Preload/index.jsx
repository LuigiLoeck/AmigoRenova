import React, {useEffect, useContext, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loading from '../../components/Loading';
import {AuthUserContext} from '../../context/AuthUserProvider';
import Animated from 'react-native-reanimated';

export default function Preload({navigation}) {
  const [loading, setLoading] = useState(false);
  const {getUserCache, signIn} = useContext(AuthUserContext);

  const loginUser = async () => {
    if (await getUserCache()) {
      navigation.reset({
        index: 0,
        routes: [{name: 'AppStack'}],
      });
    }
  };

  useEffect(() => {
    //loginUser();
  }, []);

  const nav = ({route, navigation}) => {
    const {getUserCache, signIn} = useContext(AuthUserContext);
    const {item} = route.params;
  };

  const ClientPage = () => {
    navigation.navigate('SignUp', {userType: 'client'});
  };

  const TechPage = () => {
    navigation.navigate('SignUp', {userType: 'tech'});
  };

  const navigateToPage = page => {
    navigation.navigate(page);
  };

  return (
    <SafeAreaView>
      <ScrollView className="h-screen bg-primary-500">
        <View className="bg-primary-700 justify-between px-5 pt-5">
          <Text className="text-2xl text-black w-[80%] leading-normal tracking-wider">
            Tem o seu próprio negocio? Quer ajudar as pessoas?
            <Text className="text-white">Cadastre-se Agora</Text>
          </Text>
          <Pressable
            className="bg-accent-secundary-700 py-3 px-5 self-end rounded-full mr-5 mt-5 hover:bg-accent-secundary-500 active:bg-accent-secundary-900"
            onPress={TechPage}>
            <Text className="text-white text-2xl font-semibold">
              Quero Ajudar
            </Text>
          </Pressable>
          <Animated.Image
            sharedTransitionTag="imageTag"
            source={require('../../assets/images/person-on-cafe.png')}
            className="h-52"
            resizeMode="contain"
          />
        </View>
        <View className="px-5 pt-5 bg-white ">
          <Text className="text-2xl text-black leading-normal tracking-wider">
            Seus bens estão com defeito?{' '}
            <Text className="text-primary-800">Cadastre-se agora</Text> e peça
            ajuda a pessoa mais próxima!
          </Text>
          <Pressable
            className="bg-accent-secundary-700 py-3 px-5 self-end rounded-full mr-5 mt-16 mb-40 hover:bg-accent-secundary-500 active:bg-accent-secundary-900"
            onPress={ClientPage}>
            <Text className="text-white text-2xl font-semibold">
              Preciso de ajuda
            </Text>
          </Pressable>
          <Image
            source={require('../../assets/images/person-with-tablet.png')}
            className="h-52 absolute bottom-0 left-0"
            resizeMode="contain"
          />
        </View>
        <View className=" bg-primary-500 justify-center items-center h-10">
          <Text className="text-black">
            Ja tem uma conta?{' '}
            <Text
              onPress={() => {
                navigateToPage('SignIn');
              }}
              className="text-white underline">
              Faça login
            </Text>
          </Text>
        </View>
      </ScrollView>
      {loading && <Loading />}
    </SafeAreaView>
  );
}
