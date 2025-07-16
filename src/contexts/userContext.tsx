import { createContext, useContext, useState } from "react";
import { User, UserContextType } from "../types/Types";

const UserContext = createContext<UserContextType| undefined>(undefined);

export const UserProvider = ({children}:{children: React.ReactNode})=>{
    const [user, setUser] = useState<User| null>(null);
    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser deve ser usado dentro de um UserProvider");
  return context;
}
