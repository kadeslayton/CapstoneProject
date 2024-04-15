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

export async function getSingleProducts({id}) {
  try {
    const response = await fetch(`${baseUrl}/products/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    const prodsArray = await response.json();
    console.log("API Index Single: ", prodsArray)
    return prodsArray;
  } catch (error) {
    console.log(error);
  }
}

export async function apiLogIn({username, password}) {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: { "Content-Type": "application/json" },
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
    console.log(json)
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUserInfo() {
  try {
    const response = await fetch(`${baseUrl}/users`);
    const json = await response.json();
    console.log(json)
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

export async function GetSingleCart({id}) {
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

export async function addToCart(userId, products, date, id) {
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

