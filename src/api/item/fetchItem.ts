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
  }
}