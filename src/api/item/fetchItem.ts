export const fetchItems = {
  getAll: async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/items`);
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  },
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
};