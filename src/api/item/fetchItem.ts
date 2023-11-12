export const fetchItems = {
  getAll: async () => {
    try {
      const response = await fetch('https://currency-postgres.vercel.app/api/v1/items')
      if (!response.ok) {
        throw new Error('データの取得に失敗しました')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  },
  addHistory: async (formData: { price: number; itemId: number }) => {
  const response = await fetch(
    "https://currency-postgres.vercel.app/api/v1/itemhistory",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  const data = await response.json();
  console.log(data);
 }
}