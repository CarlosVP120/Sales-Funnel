import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      question1,
      question2,
      question3,
    };
    fetch("https://hook.us1.make.com/5soqnj9ia954dtucyuqiklq9iw4sexjz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setName("");
        setEmail("");
        setPhone("");
        setQuestion1("");
        setQuestion2("");
        setQuestion3("");
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-10">
      {/* Image that covers the screen */}
      <img
        className="h-full w-full object-cover absolute top-0 left-0 -z-10"
        src="https://www.nuveen.com/global/global/-/media/nuveen/thinking/real-estate/outlook-2023/334100-real-estate-outlook-hero-1380x800px_.ashx?sc_lang=en"
        alt="background"
      />
      {/* Overlay */}
      <div className="absolute h-full w-full bg-blue-950 opacity-80 top-0 left-0 z-10"></div>
      {/* Responsive Content of the Real Estate Sales Funnel in the center*/}
      <h1 className="lg:text-5xl text-yellow-400 font-sans text-center font-bold self-center z-30 max-w-5xl px-5 text-2xl uppercase">
        Descubre cómo ser exitoso invirtiendo en bienes raíces
      </h1>
      <div className="z-40 w-[95vw] lg:max-w-[50vw] flex flex-col gap-5 bg-black bg-opacity-50 p-6 rounded-xl">
        <h1 className="text-lg lg:text-3xl text-white text-center font-bold self-center ">
          Descubre cómo invertir en bienes raíces de manera efectiva y{" "}
          <span className="underline text-red-500">PERSONALIZADA!</span> Obtén
          tu guía <span className="underline text-red-500">GRATUITA</span> sobre
          estrategias de inversión adaptadas a tus necesidades y metas
          financieras.
        </h1>
        {/* Form */}
        <form
          className="flex flex-col justify-center items-center self-center lg:w-2/3 w-full"
          onSubmit={handleSubmit}
        >
          <input
            required
            className="bg-white rounded-md p-2 m-2 w-full"
            type="text"
            placeholder="Nombre y apellido"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            required
            className="bg-white rounded-md p-2 m-2 w-full"
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="bg-white rounded-md p-2 m-2 w-full"
            type="text"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="text-white text-center font-semibold">
            ¿Cuál es tu nivel de experiencia en inversiones en bienes raíces?
          </label>
          <input
            required
            className="bg-white rounded-md p-2 m-2 w-full"
            type="text"
            placeholder="¿Cuál es tu nivel de experiencia en inversiones en bienes raíces?"
            value={question1}
            onChange={(e) => setQuestion1(e.target.value)}
          />
          <label className="text-white text-center font-semibold">
            ¿Cuál es tu objetivo principal al invertir en bienes raíces? (por
            ejemplo, generar ingresos pasivos, diversificar tu cartera, obtener
            ganancias a largo plazo, etc.)
          </label>
          <input
            required
            className="bg-white rounded-md p-2 m-2 w-full"
            type="text"
            placeholder="¿Cuál es tu objetivo principal al invertir en bienes raíces? (por ejemplo, generar ingresos pasivos, diversificar tu cartera, obtener ganancias a largo plazo, etc.)"
            value={question2}
            onChange={(e) => setQuestion2(e.target.value)}
          />
          <label className="text-white text-center font-semibold">
            ¿Cuál es tu tolerancia al riesgo financiero? (por ejemplo, prefieres
            inversiones seguras y estables o estás dispuesto a asumir riesgos
            para obtener mayores rendimientos)
          </label>
          <input
            required
            className="bg-white rounded-md p-2 m-2 w-full"
            type="text"
            placeholder="¿Cuál es tu tolerancia al riesgo financiero? (por ejemplo, prefieres inversiones seguras y estables o estás dispuesto a asumir riesgos para obtener mayores rendimientos)"
            value={question3}
            onChange={(e) => setQuestion3(e.target.value)}
          />

          <button
            className="bg-blue-950 text-white rounded-md p-2 m-2 w-full"
            type="submit"
          >
            Regístrate
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
