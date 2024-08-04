import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Alert,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';
import {AuthUserContext} from '../../context/AuthUserProvider';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

const ForgotPass = ({navigation}) => {
  const {forgotPass} = useContext(AuthUserContext);
  const [email, setEmail] = useState('');

  const recover = async () => {
    let msgError = '';
    if (email !== '') {
      msgError = await forgotPass(email);
      if (msgError === 'ok') {
        Alert.alert(
          'Email Enviado',
          'Verifique sua caixa de entrada no email: ' + email,
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.goBack();
              },
            },
          ],
        );
      } else {
        Alert.alert('Erro', msgError);
      }
    } else {
      Alert.alert('Campo Vazio', 'Preencha o campo de email');
    }
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
        <View className="flex gap-y-14 items-center mt-10">
          <Text className="text-black text-2xl my-5">Recuperar senha</Text>
          <Animated.Image
            sharedTransitionTag="imageTag"
            source={require('../../assets/images/person-on-cafe.png')}
            className="h-36"
            resizeMode="contain"
          />
          <View className="border-solid border-2 border-primary-400 flex h-14 my-2 justify-center px-3 rounded-xl">
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="go"
              onChangeText={t => setEmail(t)}
              autoFocus={true}
              placeholderTextColor="#0003"
              autoCapitalize="none"
              className="w-64"
            />
            <Text className="absolute bg-slate-100 left-6 w-14 text-center top-[-12]">
              Email
            </Text>
          </View>
          <Pressable
            className="bg-accent-secundary-700 py-3 px-5 rounded-full mt-6 hover:bg-accent-secundary-500 active:bg-accent-secundary-900"
            onPress={recover}>
            <Text className="text-white text-2xl font-semibold">Recuperar</Text>
          </Pressable>
          <Text
            className="text-primary-700 text-xl"
            onPress={() => navigation.goBack()}>
            Voltar
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPass;
