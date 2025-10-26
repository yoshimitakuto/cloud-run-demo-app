type helloWorldRes = {
  message: string;
};

export const helloWorld = (): helloWorldRes => {
  return { message: "Hello, World!" };
};
