import { useEffect } from "react";

const publicVapidKey =
  "BLmOFpj8Li6Ehq6dznVJZ_e2NLM7cyLd-T_KsONQSsQCDjg7Tfp6RGm6QGlf5O2P80jbglUALUxXq5zfLF3tSyE";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const NotificationSetup = () => {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });

        // Verificar si ya estás suscrito
        const existingSubscription =
          await registration.pushManager.getSubscription();
        if (existingSubscription) {
          console.log("Ya estás suscrito:", existingSubscription);
          return; // Salir si ya estás suscrito
        }

        // Suscribirse si no estás suscrito
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        });

        await fetch("http://localhost:3001/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: { "Content-Type": "application/json" },
        });

        console.log("Usuario suscrito a notificaciones");
      }
    };

    registerServiceWorker();
  }, []);

  return <div></div>;
};

export default NotificationSetup;
