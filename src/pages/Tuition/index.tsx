import { Header } from "../../components/Header";
import { useFinance } from "../../hooks/useFinance";

function TuitionPage() {
  const { athletes } = useFinance();
  return (
    <div className="w-screen flex flex-col items-center pb-14 h-full">
      <Header title="Mensalidades" />
      {athletes.map((athlete) => (
        <div key={athlete.id} className="flex items-center gap-2">
          <p>{athlete.name}</p>-
          <p>{athlete.club}</p>-
        </div>
      ))}
    </div>
  );
}

export default TuitionPage;
