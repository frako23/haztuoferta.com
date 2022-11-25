const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      notification: undefined,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      favorites: [],
      computadoras: [],
      celulares: [],
      videojuegos: [],
      ofertas: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-zr71gznn0qr.ws-us77.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            const mensaje = await resp.json();
            alert(mensaje.msg);
            return false;
          }

          const data = await resp.json();
          console.log("Esto vino del backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("Hubo un error al hacer login in");
        }
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "La aplicacion acaba de cargar, sincronizando el token de session storage"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      signup: async (name, lastname, phone, email, password) => {
        const store = getStore();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            lastname: lastname,
            phone: phone,
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            "https://3001-4geeksacade-reactflaskh-zr71gznn0qr.ws-us77.gitpod.io/api/users",
            options
          );

          if (!response.ok) {
            let danger = await response.json();
            alert(danger);
            return false;
          }

          const data = await response.json();
          console.log("This came from the backend", data);
          return true;
        } catch (error) {
          console.error("There has been an error login in");
        }
      },
      logout: () => {
        const token = sessionStorage.removeItem("token");
        console.log("Se han borrado todos los tokens");
        setStore({ token: null });
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getComputadoras: () => {
        const apiURL = `https://3001-4geeksacade-reactflaskh-zr71gznn0qr.ws-us77.gitpod.io/api/computadoras`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ computadoras: body }))
          .catch((error) => console.log(error));
      },

      getCelulares: async () => {
        const cellURL = `https://3001-4geeksacade-reactflaskh-zr71gznn0qr.ws-us77.gitpod.io/api/celulares`;

        try {
          let response = await fetch(cellURL);
          if (response.ok) {
            let body = await response.json();
            setStore({ celulares: body });
          } else if (response.status === 500) {
            console.log(response.status);
          }
        } catch (error) {
          console.log(error);
        }
      },

      getOfertas: () => {
        const apiURL = `https://3001-4geeksacade-reactflaskh-zr71gznn0qr.ws-us77.gitpod.io/api/ofertas_de_compras`;
        fetch(apiURL)
          .then((Response) => {
            if (Response.ok) {
              return Response.json();
            }
            throw new Error("Ha ocurrido un error");
          })
          .then((body) => setStore({ ofertas: body }))
          .catch((error) => console.log(error));
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      setNotification: (mensaje) => {
        setStore({ notification: mensaje });
        setTimeout(() => {
          setStore({ notification: undefined });
        }, 3000);
      },
    },
  };
};

export default getState;
