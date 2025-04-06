// URL absoluta usando variável de ambiente
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

interface Equipment {
  id: string;
  equipmentModelId: string;
  name: string;
}

export async function getData(): Promise<Equipment[]> {
  const res = await fetch(`${BASE_URL}/data/equipment.json`)
  if(!res.ok){
    throw new Error('Failed to fetch equipment data')
  }
  console.log('res', res)
  return res.json()
}