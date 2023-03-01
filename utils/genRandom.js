const jap = ['Φ', 'Λ', 'Γ', 'Π', 'Δ', 'Σ', 'Ψ', 'Ω', 'Ξ',]

export function genRandom() {
    let randomLetter = jap[Math.floor(Math.random() * jap.length)];
    return randomLetter
}