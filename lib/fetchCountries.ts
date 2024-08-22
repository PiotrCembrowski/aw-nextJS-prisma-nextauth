export async function getCountries() {
  const response = await fetch("http://localhost:3000/api/countries", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error(
      "An error occured while fetching the data."
    ) as Error & { code?: number; info?: any };
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return JSON.stringify(data);
}

export async function deleteCountries() {
  const response = await fetch("http://localhost:3000/api/countries", {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error(
      "An error occured while mutating the data."
    ) as Error & { code?: number; info?: any };
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}
