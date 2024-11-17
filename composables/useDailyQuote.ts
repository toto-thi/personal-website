import { computed } from "vue";

// Returns a daily quote randomly.
export function useDailyQuote() {
    const quotes = [
        "Code the path. Shape the future.",
        "Data is the force. Code is the path.",
        "Craft the code. Predict the unknown.",
        "Lines of code, futures unlocked.",
        "In data we trust; with code we create.",
        "In the code's labyrinth, we discover the secrets of tomorrow.",
        "Through data’s mist, our code lights the path to new horizons.",
        "Like wizards with their spells, we craft code that bends reality.",
        "From the shadows of data, our code summons the future's dawn.",
        "Embarking on a quest with code as our compass and data as our guide.",
    ];
  
    const dailyQuote = computed(() => {
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today.getTime() - start.getTime();
        const dayOfYear = Math.floor(diff / 86400000);
        const index = dayOfYear % quotes.length;
        return quotes[index];
      });

    return {
      dailyQuote
    };
  }
