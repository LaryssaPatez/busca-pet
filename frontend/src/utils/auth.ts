import { jwtDecode } from "jwt-decode";

export const getUserFromToken = (token: string) => {
    try {
      const decodedToken: any = jwtDecode(token);
      const username = decodedToken;
      if (username) {
        return { username };
      } else {
        console.error('Username not found in token');
        return null;
      }
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  };
  