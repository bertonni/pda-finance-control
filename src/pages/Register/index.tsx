import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { AthleteFormData } from "../../contexts/Finance/types";
import { Button } from "../../components/Button";
import { useFinance } from "../../hooks/useFinance";

const defaultAthlete: AthleteFormData = {
  name: "",
  club: "",
};

const clubs = ["Boca Juniors", "Independiente", "Racing Club", "River Plate"];

export const RegisterPage = () => {
  const { addAthlete } = useFinance();
  const [athlete, setAthlete] = useState<AthleteFormData>(defaultAthlete);

  const handleSubmit = () => {
    if (!athlete.name || !athlete.club) {
      alert("Preencha todos os campos");
      return;
    }
    addAthlete(athlete);
    setAthlete(defaultAthlete);
  };

  return (
    <div className="w-screen flex flex-col items-center h-full">
      <Header title="Registro" />
      <div className="flex mt-4 flex-col w-full px-14">
        <Input
          label="Nome"
          value={athlete.name}
          onChange={(e) => setAthlete({ ...athlete, name: e.target.value })}
        />

        <div className="flex flex-col mt-3">
          <label className="label-medium" htmlFor="club">
            Clube
          </label>
          <select
            name="club"
            id="club"
            className="h-10 border rounded px-3 w-full"
            value={athlete.club}
            onChange={(e) => setAthlete({ ...athlete, club: e.target.value })}
          >
            <option value="">Selecione</option>
            {clubs.map((club, index) => (
              <option value={club} key={index}>
                {club}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4 w-full">
          <Button title="Cadastrar" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
