const text =
    "\n\nDette er første luke i Novacare sin kodekalender!\n\nVi arrang🐘r🐘r kod🐘kal🐘nd🐘r to gang🐘r i år🐘t, båd🐘 påsk🐘 og adv🐘nt! Hv🐘r d🦓g til og m🐘d 24. d🐘s🐘mb🐘r komm🐘r d🐘t 🐘n oppg🦓v🐘 som på 🐘n 🐘ll🐘r 🦓nn🐘n måt🐘 🐘r r🐘l🦓t🐘rt til kod🐘.\n\nD🐘 først🐘 d🦓g🐘n🐘 k🐖mm🐘r 🐖ppg🦓v🐘n🐘 til å vær🐘 s🐭kt 🐘nkl🐘, 🐖g st🐖rt s🐘tt 🦓ll🐘 s🐖m g🦔ør 🐘t f🐖rsøk vil kl🦓r🐘 å løs🐘 🐖ppg🦓v🐘n🐘. 🐘tt🐘r hv🐘rt vil v🦓nsk🐘ligh🐘tsgr🦓d🐘n øk🐘, 🐖g d🐘t 🐘r ikk🐘 sikk🐘rt 🦓ll🐘 l🐘ng🐘r kl🦓r🐘r 🦓ll🐘 🐖ppg🦓v🐘n🐘. Slik sk🦓l d🐘t vær🐘!\n\nH🦓n s🐖m l🦓g🐘r 🐖ppg🦓🦄🐘n🐘, T🐖m🦓🐌, 🐌t🐖l🐘🐴 ikk🐘 på n🐖🐘n! 🐌å ing🐘n h🦓🐴 fått l🐖🦄 til å l🐘🐌🐘 k🐖🐴🐴🐘ktu🐴 på 🐖ppg🦓🦄🐘n🐘, 🐘ll🐘🐴 🐌🦔🐘kk🐘 🦓t d🐘 f🦓kti🐌k l🦓🐴 🐌🐘g lø🐌🐘. D🐘🐴f🐖🐴 🐘🐴 k🦓n🐌k🦔🐘 T🐖m🦓🐌 d🐘n 🐌🐖m 🐘🐴 🦓ll🐘🐴 m🐘🐌t 🐌p🐘nt på 🐖m n🐖🐘n kl🦓🐴🐘🐴 å lø🐌🐘 🐖ppg🦓🦄🐘n🐘.\n\nH🦄🐘🐴 d🦓g gå🐴 🐖🐵🐵g🦓🦄🐘n ut 🐵å å f🦜🦏🦏🐘 🐘t 🐐🐖d🐘🐖🐴d, 🐖g d🦓g🐘🦏🐌 🐐🐖d🐘🐖🐴d 🐌tå🐴 🐵å 🐌🦜🐌t🐘 l🦜🦏🦔🐘 🦜 d🐘🦏🦏🐘 t🐘🐐🐌t🐘🦏. Du må b🦓🐴🐘 🐌🐘 f🐖🐴b🦜 🦓ll🐘 🐘m🐖🦔🦜🐘🦏🐘, f🐖🐴 d🐘t 🐘🐴 🦜🦏g🐘🦏 🐘m🐖🦔🦜🐘🐴 🦜 🐐🐖🐫🐘🐖🐴🐫🐘t.\n\n🐫🦓g🐘🦏🐌 🐐🐖🐫🐘🐖🐴🐫 🐘🐴:\n🐴🐘🦜🦏🐌🐫🐭🐴🐘🐐🦄🦜🐵🦓🐌🦔🐘\n";

const result = text
    .replaceAll("🐘", "e")
    .replaceAll("🐖", "o")
    .replaceAll("🦓", "a")
    .replaceAll("🦔", "j")
    .replaceAll("🐭", "y")
    .replaceAll("🐴", "r")
    .replaceAll("🦄", "v")
    .replaceAll("🐵", "p")
    .replaceAll("🐌", "s")
    .replaceAll("🦜", "i")
    .replaceAll("🦏", "n")
    .replaceAll("🐐", "k")
    .replaceAll("🐫", "d");

console.log(result);
