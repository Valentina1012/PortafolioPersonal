import { create } from 'zustand';

export type Tech = {
  type: string;
};

type TechActions = {
  setTech: (tech: Tech) => void;
};

export const useTechStore = create<{ tech: Tech } & TechActions>()((set) => ({
  tech: { type: 'frontend' },
  setTech: (newTech: Tech) => set(() => ({ tech: newTech })),
}));
