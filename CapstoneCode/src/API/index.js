const baseUrl = "https://fakestoreapi.com";

export async function getAllProducts() {
  try {
    const response = await fetch(`${baseUrl}/products`, {
      headers: { "Content-Type": "application/json" },
    });
    const prodsArray = await response.json();
    console.log("API Index: ", prodsArray)
    return prodsArray;
  } catch (error) {
    console.log(error);
  }
}


export async function apiLogIn(username, password) {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`
      }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo(id) {
  try {
    const response = await fetch(`${baseUrl}/users/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function AddNewCart(userId, products, date) {
  try {
    const response = await fetch(`${baseUrl}/carts`, {
      method:"POST",
      body:JSON.stringify(
          {
              userId: userId,
              date: date,
              products:[{products}]
          }
      )
  })
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function GetSingleCart(id) {
  try {
    const response = await fetch(`${baseUrl}/carts/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function GetUserCart(id) {
  try {
    const response = await fetch(`${baseUrl}/carts/user/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
export async function DeleteCart(id) {
  try {
    const response = await fetch(`${baseUrl}/carts/${id}`, {
      method: "DELETE"
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function addToCart(id) {
  try {
    fetch(`${baseUrl}/carts/${id}`,{
      method:"PATCH",
      body:JSON.stringify(
        {
          userId: userId,
          date: date,
          products:[{products}]
        }
      )
    })
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

