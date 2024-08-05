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
import {TicketContext} from '../../context/TicketProvider';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Loading from '../../components/Loading';

const ClientHome = ({navigation}) => {
  //const {tickets} = useContext(TicketContext);

  const randomImage = () => {
    const images = [
      require('../../assets/images/tech1.png'),
      require('../../assets/images/tech2.png'),
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <SafeAreaView className="flex-1">
      <View
        className="bg-primary-500"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}>
        <View className="items-center flex-row bg-primary-300 px-2 py-3">
          <Image
            source={require('../../assets/images/client1.png')}
            className="h-12"
            resizeMode="contain"
          />
          <Text className="text-center text-xl text-black pl-3">
            Client Nome
          </Text>
          <Icon
            name="exit-to-app"
            size={28}
            color="black"
            className="right-4 absolute"
          />
        </View>
        <View className="flex-row items-center px-5 bg-black w-[85%] mx-4 my-6 rounded-full self-center">
          <Icon name="search" size={24} color="white" />
          <TextInput
            placeholder="Pesquisa"
            placeholderTextColor={'#fff'}
            className="text-white w-[90%] text-xl"
          />
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            alignItems: 'center',
            height: 70,
          }}>
          {workers.map(worker => (
            <View
              key={worker.id}
              className="bg-black flex-row items-center px-4 rounded-3xl h-16 w-64 ml-6">
              <Image
                source={randomImage()}
                className="h-20"
                resizeMode="contain"
              />
              <View className="ml-4">
                <Text className="text-white m-0">{worker.nome}</Text>
                <Text className="text-white underline">
                  {worker.especialidade}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="bg-gray-100 rounded-t-[50] px-8 pt-12 h-[68%] items-center gap-y-12">
          <Pressable
            className="bg-accent-secundary-700 w-[70%] items-center py-3 px-5 rounded-xl hover:bg-accent-secundary-500 active:bg-accent-secundary-900"
            onPress={() => {
              console.log('Criar chamado');
            }}>
            <Text className="text-black text-3xl">Criar Chamado</Text>
          </Pressable>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            {tickets.map(ticket => (
              <View
                key={ticket.id}
                className="border-black border-solid border-2 rounded-lg px-6 py-3 gap-y-3 mb-10">
                <Text className="text-black text-lg font-medium">
                  {ticket.titulo}
                </Text>
                <Text className="text-black">{ticket.descricao}</Text>
                <View className="flex-row gap-3">
                  <Text className="text-black text-sm">
                    Tecnico encontrado:
                  </Text>
                  {ticket.status !== 1 ? (
                    <>
                      <Image
                        source={randomImage()}
                        className="h-6"
                        resizeMode="contain"
                      />
                      <Text className="text-black text-sm">Fernada pessoa</Text>
                    </>
                  ) : (
                    <>
                      <Image
                        source={require('../../assets/images/person.png')}
                        resizeMode="contain"
                      />
                      <Text className="text-black text-sm">Nenhum</Text>
                    </>
                  )}
                </View>
                <View
                  className={`${
                    ticket.status == 1 ? 'bg-accent-500' : 'bg-primary-500'
                  } ${
                    ticket.status == 3 && 'bg-accent-secundary-500'
                  } items-center py-2 rounded-2xl`}>
                  <Text className="text-black text-2xl">
                    {ticket.status == 1
                      ? 'Pendente'
                      : ticket.status == 3
                      ? 'Finalizado'
                      : 'Em andamento'}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ClientHome;

const workers = [
  {
    id: 1,
    nome: 'Cherrita Kestian',
    especialidade: 'Statistician II',
  },
  {
    id: 2,
    nome: 'Jedidiah Barkway',
    especialidade: 'VP Sales',
  },
  {
    id: 3,
    nome: 'Grace Glisane',
    especialidade: 'Editor',
  },
  {
    id: 4,
    nome: 'Walliw Pontain',
    especialidade: 'Geological Engineer',
  },
  {
    id: 5,
    nome: 'Enos Luten',
    especialidade: 'Librarian',
  },
  {
    id: 6,
    nome: 'Ernestus Duckerin',
    especialidade: 'Professor',
  },
];

const tickets = [
  {
    id: 1,
    titulo: 'Problema com a internet',
    descricao: 'A internet caiu e não volta mais',
    status: 1,
  },
  {
    id: 2,
    titulo: 'Problema com a impressora',
    descricao: 'A impressora não imprime',
    tecnico: 'Fernanda Pessoa',
    status: 2,
  },
  {
    id: 3,
    titulo: 'Problema com a internet',
    descricao: 'A internet caiu e não volta mais',
    tecnico: 'Jose fernando',
    status: 3,
  },
  {
    id: 4,
    titulo: 'Problema com a impressora',
    descricao: 'A impressora não imprime',
    tecnico: 'Rafael Gomes',
    status: 2,
  },
  {
    id: 5,
    titulo: 'Problema com a internet',
    descricao: 'A internet caiu e não volta mais',
    status: 1,
  },
  {
    id: 6,
    titulo: 'Problema com a impressora',
    descricao: 'A impressora não imprime',
    tecnico: 'Fernanda Pessoa',
    status: 3,
  },
];
