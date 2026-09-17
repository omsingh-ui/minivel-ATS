import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function scrollToHashElement(hash) {
  if (!hash) return;
  const targetId = hash.replace(/^#/, "");
  if (!targetId) return;

  const attemptScroll = (attemptsLeft = 6) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    } else if (attemptsLeft > 0) {
      setTimeout(() => attemptScroll(attemptsLeft - 1), 60);
    }
  };

  // Give React render cycle a brief moment to finish mounting components
  setTimeout(() => attemptScroll(), 50);
}

export default function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToHashElement(hash);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);
}
