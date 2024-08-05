import React, {createContext, useState, useContext, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ApiContext} from './ApiProvider';

export const TicketContext = createContext({});

export const TicketProvider = ({children}) => {
  const [tickets, setTickets] = useState([]);
  const {api} = useContext(ApiContext);

  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     try {
  //       const response = await api.get('/api/tickets');
  //       setTickets(response.data);
  //     } catch (error) {
  //       console.error('Error fetching tickets:', error);
  //     }
  //   };

  //   fetchTickets();
  // }, []);

  const save = async ticket => {
    try {
      const response = await api.post('/api/tickets', ticket);
      setTickets([...tickets, response.data]);
      return true;
    } catch (error) {
      console.error('Error saving ticket:', error);
      return false;
    }
  };

  const update = async ticket => {
    try {
      await api.put(`/api/tickets/update/${ticket.id}`, ticket);
      setTickets(tickets.map(t => (t.id === ticket.id ? ticket : t)));
      return true;
    } catch (error) {
      console.error('Error updating ticket:', error);
      return false;
    }
  };

  const deleteTicket = async ticket => {
    try {
      await axios.delete(`/api/tickets/delete/${ticket.id}`);
      setTickets(tickets.filter(t => t.id !== ticket.id));
      return true;
    } catch (error) {
      console.error('Error deleting ticket:', error);
      return false;
    }
  };

  return (
    <TicketContext.Provider
      value={{tickets, setTickets, save, update, deleteTicket}}>
      {children}
    </TicketContext.Provider>
  );
};
