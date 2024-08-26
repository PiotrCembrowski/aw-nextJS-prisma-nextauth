"use server";

const register = async (formData: FormData) => {
  const email = formData.get("useremail") as String;
  const password = formData.get("userpassword") as String;
  const passwordRepeated = formData.get("userpasswordrepeated") as String;
};

export { register };
