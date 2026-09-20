export interface Campaign {
  id: string;
  type: "campaign" | "rest";
  order: number | null;
  name: string;
  short: string;
  start: number;
  end: number;
  dates: string;
  duration: string;
  color: string;
  goal: string;
  pillars: string[];
  why: string[];
  note?: string;
}
