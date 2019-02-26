export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    console.log(response)  
    return response; 
  } catch (error) {
    throw new Error(error);
  }
}