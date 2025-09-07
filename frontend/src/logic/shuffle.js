export function shuffle(array) {
  const shuffled = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // IMPORTANT : retourner le tableau mélangé
  return shuffled;
}
