// Repère les citations Markdown dont le premier mot en gras est un mot-clé de cours
// et leur ajoute une classe pour le style (voir custom.css).
(function () {
  const kinds = {
    'théorème': 'thm', 'proposition': 'thm', 'lemme': 'thm', 'corollaire': 'thm',
    'définition': 'def',
    'preuve': 'proof', 'démonstration': 'proof',
    'remarque': 'rem', 'exemple': 'rem'
  };
  document.querySelectorAll('.content blockquote').forEach(function (b) {
    const s = b.querySelector('strong');
    if (!s) return;
    const word = s.textContent.trim().toLowerCase().split(/[\s.:(]/)[0];
    if (kinds[word]) b.classList.add('q-' + kinds[word]);
  });
})();
