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
import {AuthUserContext} from '../../context/AuthUserProvider';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import Loading from '../../components/Loading';

const SignIn = ({navigation}) => {
  const {signIn} = useContext(AuthUserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'AppStack'}],
    });

    // let msgError = '';
    // if (email && password) {
    //   setLoading(true);
    //   msgError = await signIn(email, password);
    //   if (msgError === 'ok') {
    //     setLoading(false);
    //     navigation.reset({
    //       index: 0,
    //       routes: [{name: 'AppStack'}],
    //     });
    //   } else {
    //     setLoading(false);
    //     Alert.alert('Erro', msgError);
    //   }
    // } else {
    //   Alert.alert('Campos Vazios', 'Preencha todos os campos');
    // }
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex gap-y-10 items-center">
          <Text className="text-black text-5xl my-5">Login</Text>
          <Animated.Image
            sharedTransitionTag="imageTag"
            source={require('../../assets/images/person-on-cafe.png')}
            className="h-36"
            resizeMode="contain"
          />
          <View className="w-[75%]">
            <View className="border-solid border-2 border-primary-400 flex h-14 my-6 justify-center px-3 rounded-xl">
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                value={email}
                onChangeText={t => setEmail(t)}
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor={'#0003'}
                autoCapitalize="none"
              />
              <Text className="absolute bg-slate-100 left-6 w-14 text-center top-[-12]">
                Email
              </Text>
            </View>
            <View className="border-solid border-2 border-primary-400 flex h-14 my-2 justify-center px-3 rounded-xl">
              <TextInput
                placeholder="Senha"
                returnKeyType="go"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={t => setPassword(t)}
                placeholderTextColor={'#0003'}
                autoCapitalize="none"
                ref={input => {
                  this.passwordInput = input;
                }}
                className="w-60"
              />
              <Text className="absolute bg-slate-100 left-6 w-14 text-center top-[-12]">
                Senha
              </Text>
              <Icon
                name={!passwordVisible ? 'eye' : 'eye-off'}
                size={16}
                className="absolute self-end right-6"
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            </View>
            <Text
              className="self-end text-accent-secundary-900"
              onPress={() => navigation.navigate('ForgotPass')}>
              Esqueçeu sua senha
            </Text>
          </View>
          <Pressable
            className="bg-accent-secundary-700 py-3 px-5 rounded-full hover:bg-accent-secundary-500 active:bg-accent-secundary-900"
            onPress={handleSignIn}>
            <Text className="text-white text-2xl font-semibold">
              Conectar-se
            </Text>
          </Pressable>
          <Text className="text-black">
            Não possui uma conta?{' '}
            <Text
              className="text-primary-700"
              onPress={() => navigation.navigate('Preload')}>
              Cadastre-se
            </Text>
          </Text>
        </View>
      </ScrollView>
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default SignIn;
