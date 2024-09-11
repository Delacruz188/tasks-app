import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function TasksListComponent() {
  const TABLE_HEAD = ["Usuario", "Tarea", "Status", "Opciones"];

  const [allTasks, setAllTasks] = useState([]);
  const [showOnlineAlert, setShowOnlineAlert] = useState(navigator.onLine);

  // const showAlert = () => {
  //
  // };

  useEffect(() => {
    const tasksReceivedList = [];

    for (let i = 0; i < localStorage.length; i++) {
      // Obtener la clave en el índice actual
      const key = localStorage.key(i);
      // Obtener el valor asociado a la clave
      const value = JSON.parse(localStorage.getItem(key));
      console.log(value);

      // Guardar el valor en la lista
      tasksReceivedList.push(value);
    }

    setAllTasks(tasksReceivedList);
    console.log(tasksReceivedList);
  }, []);

  return (
    <div
      style={{
        margin: "5rem",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
      }}
      className="boxShadow"
    >
      <Card className="h-full w-full" style={{}}>
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            {showAlert()}
            <div>
              <Typography variant="h3" color="blue-gray">
                Lista de tareas asignadas a los usuarios
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Aquí puedes ver las tareas asignadas a los usuarios
              </Typography>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="w-full md:w-72">
                <Input label="Search" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allTasks
                ? allTasks.map(({ userInfo, description, name }, index) => {
                    const isLast = index === allTasks.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={userInfo.img} alt={name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {userInfo.name}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {userInfo.name}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {description}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={
                                userInfo.status == "Alive"
                                  ? "online"
                                  : "offline"
                              }
                              color={
                                userInfo.status == "Alive"
                                  ? "green"
                                  : "blue-gray"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex gap-2">
                            <Button variant="outlined" size="sm">
                              Editar
                            </Button>
                            <Button color="red" variant="outlined" size="sm">
                              Eliminar
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter> */}
      </Card>
    </div>
  );
}
