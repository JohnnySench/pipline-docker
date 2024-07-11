export type TErrorResolved = {
  message: any,
  status: string,
  title: string,
}


export const errorPreparing = (error: any) => {
  console.log(error.response);
  let title;
  switch (error.response.data.error.message) {
    case 'EMAIL_EXISTS':
      title = 'Email address already exists';
      break;
    case "WEAK_PASSWORD : Password should be at least 6 characters":
      title = 'Passwords do not match';
  }



  return {
    title: title
  }
}