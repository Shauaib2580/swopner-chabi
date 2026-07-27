import { useEffect, useMemo, useState } from "react";
import { msUntilMidnight, splitDuration } from "@/lib/utils";

export function useCountdown() {
  const [remaining, setRemaining] = useState(() => msUntilMidnight());

  useEffect(() => {
    const t = setInterval(() => setRemaining(msUntilMidnight()), 1000);
    return () => clearInterval(t);
  }, []);

  const { hh, mm, ss } = useMemo(() => splitDuration(remaining), [remaining]);

  return { hh, mm, ss };
}
