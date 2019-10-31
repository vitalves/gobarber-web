import React, { useState, useEffect, useMemo } from 'react';

import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

// CSS
import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

// ##### COMPONENTE #####
export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Exibir alerta de notificações não lidas (busca no Estado)
  const asUnread = useMemo(
    // () => Boolean(notifications.find.(notification => notification.read === false))
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  // Carregar as notificações e armazenar no estado:
  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt } // configurações dp date-fns
        ),
      }));

      setNotifications(data); // armazena no estado
    }

    loadNotifications(); // carrega as notificações
  }, []);

  // exibir notificações
  function handleToggleVisible() {
    setVisible(!visible);
  }

  // marcar a noticação como lida:
  async function handleMarkAsRead(id) {
    // marca como lida
    await api.put(`notifications/${id}`);

    // atualiza o estado com a notificação marcada como lida
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={asUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
