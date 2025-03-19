import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthResult {
  message?: string | null;
  error?: string | null;
}

interface AuthContextProps {
  user: User | null;
  signIn: (formData: object) => Promise<AuthResult>;
  logout: () => void;
  register: (formData: object) => Promise<AuthResult>;
}

const AuthContext = createContext({} as AuthContextProps);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be within AuthProvider.");
  }
  return context;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (formData: object): Promise<AuthResult> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        return {
          message: "Signed In successfully! Redirecting to Home page...",
        };
      } else {
        const data = await response.json();
        return { error: data.message || "Something Went Wrong!" };
      }
    } catch (e: any) {
      return { error: e.message || "Something Went Wrong!" };
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const register = async (formData: object): Promise<AuthResult> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return {
          message:
            "Account created successfully! Redirecting to sign-in page...",
        };
      } else {
        const data = await response.json();
        return { error: data.message || "Something Went Wrong!" };
      }
    } catch (e: any) {
      return { error: e.message || "Something Went Wrong!" };
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
