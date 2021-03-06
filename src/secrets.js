const secrets = ["GAPI_API_KEY", "GAPI_CLIENT_ID"];

const secret = (key) => {
  if (process.env.NODE_ENV === "production") {
    return process.env[`REACT_APP_${key}`];
  }
  let value = localStorage[key];
  if (!value) {
    value = prompt(`Provide ${key}`);
    if (value) {
      localStorage[key] = value;
    }
  }
  return value;
};

// always import whole object, directly importing keys will return nulls
export default Object.fromEntries(secrets.map((key) => [key, secret(key)]));
