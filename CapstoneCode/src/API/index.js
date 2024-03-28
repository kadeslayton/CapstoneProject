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


export async function apiLogIn({username, password}) {
  try {
    console.log(JSON.stringify({
      username: username,
      password: password
    }))
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    console.log("API Login: ", json)
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function apiRegister(username, password, email, firstname, lastname) {

  try{const response = await fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:`${email}`,
                    username:`${username}`,
                    password:`${password}`,
                    name:{
                        firstname:`${firstname}`,
                        lastname:`${lastname}`
                    },
                    address:{
                      city:'kilcoole',
                      street:'7835 new road',
                      number:3,
                      zipcode:'12926-3874',
                      geolocation:{
                          lat:'-37.3159',
                          long:'81.1496'
                      }
                  },
                  phone:'1-570-236-7033'
                }
            )
        })
        const json = await response.json();
        console.log("API Register (js): ", json)
    return json;
  }catch(error){
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

