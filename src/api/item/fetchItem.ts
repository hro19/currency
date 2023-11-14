export const fetchItems = {
  getAll: async () => {
    try {
<<<<<<< Updated upstream
      const response = await fetch("https://currency-postgres.vercel.app/api/v1/items");
=======
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/items`);
>>>>>>> Stashed changes
      if (!response.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error(error);
    }
  },
  addHistory: async (formData: {
    price: number;
    itemId: number;
    rate: number;
    inverseRate: number;
  }) => {
<<<<<<< Updated upstream
    const response = await fetch(
      "https://currency-postgres.vercel.app/api/v1/itemhistory",
      {
        method: "POST",
=======
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/itemhistory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  },
  editItem: async (itemId:number,formData:any) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASIC_URL}/items/${itemId}`,
      {
        method: "PUT",
>>>>>>> Stashed changes
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  },
<<<<<<< Updated upstream
=======
  deliteItemHistory: async (itemHistoryId: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASIC_URL}/itemhistory/${itemHistoryId}`,
      {
        method: "DELETE",
      }
    )
    const data = await response.json();
    return data;
  }
>>>>>>> Stashed changes
};