export function initializeStack(stack: HTMLDivElement | null): () => void {
    if (!stack) return () => {};
  
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains("card"));
  
    cards.forEach((card) => stack.appendChild(card as HTMLElement));
  
    function moveCard() {
      const lastCard = stack?.lastElementChild;
  
      if (lastCard?.classList.contains("card")) {
        lastCard.classList.add("swap");
  
        setTimeout(() => {
          lastCard.classList.remove("swap");
          stack?.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    }
  
    const autoplayInterval = setInterval(moveCard, 4000);
  
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const card = target.closest(".card");
  
      if (card && card === stack.lastElementChild) {
        card.classList.add("swap");
  
        setTimeout(() => {
          card.classList.remove("swap");
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    };
  
    stack.addEventListener("click", handleClick);
  
    // Retourner une fonction pour nettoyer les événements et l'intervalle
    return () => {
      clearInterval(autoplayInterval);
      stack.removeEventListener("click", handleClick);
    };
  }
  