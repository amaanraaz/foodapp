export function filterData (searchText,restaurants){
  console.log(searchText);
    const filterData = restaurants.filter((restaurant)=>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
    return filterData;
  }