import { GraduationCap, Atom, Dna, BookOpen, Landmark, Briefcase, Trophy, Target, Users, Award, ClipboardCheck, Clock, BadgeCheck, IndianRupee, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { GraduationCap, Atom, Dna, BookOpen, Landmark, Briefcase, Trophy, Target, Users, Award, ClipboardCheck, Clock, BadgeCheck, IndianRupee };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? GraduationCap;
  return <C className={className} />;
}
