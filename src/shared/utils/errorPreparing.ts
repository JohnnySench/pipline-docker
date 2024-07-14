export type TErrorResolved = {
  message?: string,
  status?: string,
  title: string,
}


export const errorPreparing = (error: any): TErrorResolved => {
  let title;
  switch (error.response.data.error.message) {
    case "EMAIL_EXISTS":
      title = "Email address already exists";
      break;
    case "WEAK_PASSWORD : Password should be at least 6 characters":
      title = "Passwords do not match";
      break;
    case "INVALID_EMAIL":
      title = "Email already exists";
      break;
    default:
      title = "Error";
      break;
  }


  return {
    title: title
  };
};