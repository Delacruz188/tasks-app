import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function InfoCard({ data, texto }) {
  const receivedData = JSON.parse(data);

  if (!data || data.length === 0) {
    return <div>No hay datos disponibles</div>;
  }

  const getName = (name) => {
    const synth = window.speechSynthesis;
    const voice = new SpeechSynthesisUtterance(name);
    voice.lang = "es-ES";
    synth.speak(voice);
  };
  console.log(receivedData);
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {receivedData.map((element, index) => {
        return (
          <Card style={{ width: "30rem", margin: "2rem" }} key={index}>
            <CardHeader floated={false}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <img src={element.image} alt="profile-picture" />
              </div>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>{element.name}</div>
                  <div>
                    <Button
                      className="flex items-center gap-3"
                      onClick={() => getName(element.name)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.83 3c0-1.77-.77-3.36-2-4.47v8.94c1.23-1.11 2-2.7 2-4.47zm1.43-7.07l-1.41 1.41C18.42 8.54 19 10.21 19 12s-.58 3.46-1.58 4.66l1.41 1.41C20.42 16.72 21 14.45 21 12s-.58-4.72-1.74-6.07zM14 3.23v2.06c3.06.44 5.5 3.06 5.5 6.71s-2.44 6.27-5.5 6.71v2.06c4.31-.47 7.5-4.17 7.5-8.77s-3.19-8.3-7.5-8.77z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                {element.species} / {element.status}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                {element.origin.name}
              </Typography>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
