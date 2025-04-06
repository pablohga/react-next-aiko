/* import SimpleMap from "@/Components/CustomMarkerMap"; */
import { getData } from "@/Components/GetData";
import CustomMarkerMap from "@/Components/MarkerMap";
/* import Image from "next/image"; */

export default async function Home() {
  const data = await getData(); // Obtém os dados JSON
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-lg font-bold mb-2">Dados do Equipamento</h2>
          <h1>Equipamentos viaveis</h1>
          <h2 className="text-lg font-bold mb-4">Equipamentos Disponíveis</h2>
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
            {data.map(equipment => (
              <li key={equipment.id}>
                <strong>{equipment.name}</strong> (Modelo: {equipment.equipmentModelId})
              </li>
            ))}
          </ul>
          
        </div> 
        <CustomMarkerMap/>
        {/* Exibe os dados carregados do JSON */}
        
      </main>
    </div>
  );
}
// quero fazer um for no nextjs?
