'use client';

import { useState, useEffect } from "react";

export interface LocalUser {
  uid: string;
  displayName: string;
}

export function useAuth() {
  const [user, setUser] = useState<LocalUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('quiz_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (name: string) => {
    const newUser = { uid: Math.random().toString(36).substr(2, 9), displayName: name };
    localStorage.setItem('quiz_user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('quiz_user');
    setUser(null);
  };

  return { user, loading, login, logout };
}
