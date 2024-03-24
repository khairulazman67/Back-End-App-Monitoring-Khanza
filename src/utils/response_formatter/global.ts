export type Payload = {
  metaData: {
    code: number;
    message: string;
  };
  response?: object;
};

export const success = (data?: object, message = "Success"): Payload => {
  let result: Payload = {
    metaData: {
      code: 200,
      message: message,
    },
  };

  if (data) {
    result.response = {
      data: data,
    };
  }

  return result;
};
