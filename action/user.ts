"use server";

const register = async (formData: FormData) => {
  const username = formData.get("username") as String;
  const email = formData.get("useremail") as String;
  const password = formData.get("userpassword") as String;
  const passwordRepeated = formData.get("userpasswordrepeated") as String;

  if (!username || !email || !password || !passwordRepeated) {
    throw new Error("Please fill all fields.");
  }
};

export { register };
