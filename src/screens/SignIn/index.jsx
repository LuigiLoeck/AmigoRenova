import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {AuthUserContext} from '../context/AuthUserProvider';
import Animated from 'react-native-reanimated';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex gap-y-10 items-center">
          <Text className="text-black text-3xl my-5">Login</Text>
          <Animated.Image
            sharedTransitionTag="imageTag"
            source={require('../../assets/images/person-on-cafe.png')}
            className="h-48"
            resizeMode="contain"
          />
          <View className="w-[75%] gap-y-5">
            <View className="border-solid border-2 border-primary-400 flex h-14 justify-center px-3 rounded-xl">
              <TextInput className="peer" />
              <Text className="peer-active:text-red-500 absolute left-6 bg-white w-14 text-center">
                Email
              </Text>
            </View>
            <View className="border-solid border-2 border-primary-400 flex h-14 justify-center px-3 rounded-xl">
              <Text className="absolute left-6">Senha</Text>
              <TextInput />
            </View>
            <Text className="self-end text-accent-secundary-900">
              Esqueçeu sua senha
            </Text>
          </View>
          <Pressable
            className="bg-accent-secundary-700 py-3 px-5 rounded-full hover:bg-accent-secundary-500 active:bg-accent-secundary-900"
            onPress={() => {
              navigateToPage('SignUp');
            }}>
            <Text className="text-white text-2xl font-semibold">
              Conectar-se
            </Text>
          </Pressable>
          <Text>
            Não possui uma conta?{' '}
            <Text
              className="text-primary-700"
              onPress={() => navigation.navigate('Preload')}>
              Cadastre-Se
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
