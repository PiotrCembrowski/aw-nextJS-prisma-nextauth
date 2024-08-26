"use server";

const register = async (formData: FormData) => {
  const name = formData.get("name") as String;
  const email = formData.get("useremail") as String;
  const password = formData.get("userpassword") as String;
  const passwordRepeated = formData.get("userpasswordrepeated") as String;
};

export { register };
