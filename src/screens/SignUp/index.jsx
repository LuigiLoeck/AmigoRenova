import React, {useState, useContext} from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  Pressable,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthUserContext} from '../../context/AuthUserProvider';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

const SignUpScreen = ({navigation, route}) => {
  const {userType} = route.params;
  const [nome, setNome] = React.useState('');
  const [sobreNome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [cpf, setCpf] = React.useState('');

  const BackPage = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    navigation.navigate({
      index: 0,
      routes: [{name: 'AppStack'}],
    });
  };

  return (
    <SafeAreaView>
      <ScrollView className="bg-primary-1000 h-[100%]">
        {userType === 'client' ? (
          <View>
            <Text> Cliente </Text>
          </View>
        ) : (
          <View>
            <View>
              <Icon
                onPress={BackPage}
                className="mt-5 ml-5"
                name="arrowleft"
                size={40}
                color="#fff"
              />
            </View>
            <Text className="text-white text-6xl mt-5 text-center">
              Cadastre-se
            </Text>
            <View className="border-solid border-2 border-primary-400 flex h-14 my-6 justify-center px-3 rounded-xl m-[10%] mt-5">
              <TextInput
                placeholder="Nome"
                keyboardType="name"
                returnKeyType="next"
                value={nome}
                onChangeText={t => setNome(t)}
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor={'#FFF'}
                autoCapitalize="none"
              />
              <Text className="absolute bg-primary-1000 left-6 w-16 text-center top-[-12] rounded color-black">
                Nome
              </Text>
            </View>
            <View className="border-solid border-2 border-primary-400 flex h-14 my-6 justify-center px-3 rounded-xl m-[10%] mt-5">
              <TextInput
                placeholder="Sobrenome"
                keyboardType="email-address"
                returnKeyType="next"
                value={sobreNome}
                onChangeText={t => setSobrenome(t)}
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor={'#FFF'}
                autoCapitalize="none"
              />
              <Text className="absolute bg-primary-1000 left-6 w-28 text-center top-[-12] rounded color-black">
                Sobrenome
              </Text>
            </View>
            <View className="border-solid border-2 border-primary-400 flex h-14 my-6 justify-center px-3 rounded-xl m-[10%] mt-5">
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
                placeholderTextColor={'#FFF'}
                autoCapitalize="none"
              />
              <Text className="absolute bg-primary-1000 left-6 w-20 text-center top-[-12] rounded color-black">
                Email
              </Text>
            </View>
            <View className="border-solid border-2 border-primary-400 flex h-14 my-6 justify-center px-3 rounded-xl m-[10%] mt-5">
              <TextInput
                placeholder="Senha"
                keyboardType="Senha-address"
                returnKeyType="next"
                value={pass}
                onChangeText={t => setPass(t)}
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor={'#FFF'}
                autoCapitalize="none"
              />
              <Text className="absolute bg-primary-1000 left-6 w-20 text-center top-[-12] rounded color-black">
                Senha
              </Text>
            </View>
            <View className="border-solid border-2 border-primary-400 flex h-14 my-6 justify-center px-3 rounded-xl m-[10%] mt-5">
              <TextInput
                placeholder="Telefone"
                keyboardType="Telefone-address"
                returnKeyType="next"
                value={telefone}
                onChangeText={t => setTelefone(t)}
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor={'#FFF'}
                autoCapitalize="none"
              />
              <Text className="absolute bg-primary-1000 left-6 w-20 text-center top-[-12] rounded color-black">
                Telefone
              </Text>
            </View>
            <View className="border-solid border-2 border-primary-400 flex h-14 my-6 justify-center px-3 rounded-xl m-[10%] mt-5">
              <TextInput
                placeholder="Cpf"
                keyboardType="Cpf-address"
                returnKeyType="next"
                value={cpf}
                onChangeText={t => setCpf(t)}
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                placeholderTextColor={'#FFF'}
                autoCapitalize="none"
              />
              <Text className="absolute bg-primary-1000 left-6 w-20 text-center top-[-12] rounded color-black">
                Cpf
              </Text>
            </View>
            <Pressable
              className="bg-accent-secundary-700 py-3 px-5 rounded-full hover:bg-accent-secundary-500 active:bg-accent-secundary-900 mx-[25%]"
              onPress={handleSignUp}>
              <Text className="text-white text-2xl font-semibold text-center">
                Conectar-se
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#1083C5',
    height: '100%',
  },

  voltar: {
    padding: 20,
  },

  tittle: {
    flex: 2,
    fontSize: 40,
    color: '#FFF',
    textAlign: 'center',
  },

  userForm: {
    backgroundColor: 'red',
    margin: 'auto',
    width: 150,
  },
});
