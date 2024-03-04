const tg = window.Telegram.WebApp;
export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };
  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
  };
};
