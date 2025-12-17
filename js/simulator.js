// ==========================================================================
// Simulateur de Crédit Immobilier
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Synchroniser les inputs et les ranges
    syncInputAndRange('prixBien', 'prixBienRange');
    syncInputAndRange('apport', 'apportRange');
    syncInputAndRange('duree', 'dureeRange');
    syncInputAndRange('tauxInteret', 'tauxInteretRange');
    
    // Calculer automatiquement au chargement de la page
    calculateCredit();
});

/**
 * Synchroniser un input et un range
 */
function syncInputAndRange(inputId, rangeId) {
    const input = document.getElementById(inputId);
    const range = document.getElementById(rangeId);
    
    if (!input || !range) return;
    
    // Mettre à jour le range quand l'input change
    input.addEventListener('input', function() {
        range.value = this.value;
    });
    
    // Mettre à jour l'input quand le range change
    range.addEventListener('input', function() {
        input.value = this.value;
        calculateCredit();
    });
}

/**
 * Calculer le crédit immobilier
 */
function calculateCredit() {
    // Récupérer les valeurs
    const prixBien = parseFloat(document.getElementById('prixBien').value) || 0;
    const apport = parseFloat(document.getElementById('apport').value) || 0;
    const dureeAnnees = parseFloat(document.getElementById('duree').value) || 0;
    const tauxAnnuel = parseFloat(document.getElementById('tauxInteret').value) || 0;
    
    // Validation
    if (prixBien <= 0 || dureeAnnees <= 0 || tauxAnnuel <= 0) {
        return;
    }
    
    if (apport >= prixBien) {
        alert('L\'apport personnel ne peut pas être supérieur ou égal au prix du bien.');
        return;
    }
    
    // Calculs
    const montantEmprunte = prixBien - apport;
    const tauxMensuel = tauxAnnuel / 100 / 12;
    const dureeMois = dureeAnnees * 12;
    
    // Formule de calcul de la mensualité
    // M = C * (t / (1 - (1 + t)^(-n)))
    // où M = mensualité, C = capital emprunté, t = taux mensuel, n = nombre de mois
    let mensualite;
    if (tauxMensuel === 0) {
        mensualite = montantEmprunte / dureeMois;
    } else {
        mensualite = montantEmprunte * (tauxMensuel / (1 - Math.pow(1 + tauxMensuel, -dureeMois)));
    }
    
    const coutTotal = mensualite * dureeMois;
    const coutCredit = coutTotal - montantEmprunte;
    
    // Pourcentages pour le graphique
    const percentApport = (apport / prixBien) * 100;
    const percentCredit = (montantEmprunte / prixBien) * 100;
    
    // Afficher les résultats
    updateResult('mensualite', mensualite.toFixed(2) + ' TND');
    updateResult('montantEmprunte', formatNumber(montantEmprunte.toFixed(0)) + ' TND');
    updateResult('coutCredit', formatNumber(coutCredit.toFixed(0)) + ' TND');
    updateResult('coutTotal', formatNumber(coutTotal.toFixed(0)) + ' TND');
    updateResult('apportDisplay', formatNumber(apport.toFixed(0)) + ' TND');
    
    // Mettre à jour les graphiques
    updateBar('barApport', percentApport);
    updateBar('barCredit', percentCredit);
    updateResult('percentApport', percentApport.toFixed(1) + '%');
    updateResult('percentCredit', percentCredit.toFixed(1) + '%');
    
    // Afficher la section des résultats avec animation
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.style.opacity = '0';
        resultsSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            resultsSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            resultsSection.style.opacity = '1';
            resultsSection.style.transform = 'translateY(0)';
        }, 10);
    }
}

/**
 * Mettre à jour un élément de résultat
 */
function updateResult(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    }
}

/**
 * Mettre à jour une barre de graphique
 */
function updateBar(barId, percentage) {
    const bar = document.getElementById(barId);
    if (bar) {
        bar.style.width = percentage + '%';
    }
}

/**
 * Formater un nombre avec séparateur de milliers
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/**
 * Générer un tableau d'amortissement (fonction avancée - optionnelle)
 */
function generateAmortizationTable() {
    const prixBien = parseFloat(document.getElementById('prixBien').value) || 0;
    const apport = parseFloat(document.getElementById('apport').value) || 0;
    const dureeAnnees = parseFloat(document.getElementById('duree').value) || 0;
    const tauxAnnuel = parseFloat(document.getElementById('tauxInteret').value) || 0;
    
    const montantEmprunte = prixBien - apport;
    const tauxMensuel = tauxAnnuel / 100 / 12;
    const dureeMois = dureeAnnees * 12;
    
    let mensualite;
    if (tauxMensuel === 0) {
        mensualite = montantEmprunte / dureeMois;
    } else {
        mensualite = montantEmprunte * (tauxMensuel / (1 - Math.pow(1 + tauxMensuel, -dureeMois)));
    }
    
    const table = [];
    let capitalRestant = montantEmprunte;
    
    for (let mois = 1; mois <= dureeMois; mois++) {
        const interets = capitalRestant * tauxMensuel;
        const capitalRembourse = mensualite - interets;
        capitalRestant -= capitalRembourse;
        
        table.push({
            mois: mois,
            mensualite: mensualite,
            interets: interets,
            capital: capitalRembourse,
            restant: Math.max(0, capitalRestant)
        });
    }
    
    return table;
}

/**
 * Exporter les résultats en PDF (fonction à implémenter avec une bibliothèque)
 */
function exportToPDF() {
    console.log('Exportation en PDF à implémenter');
    // Nécessite une bibliothèque comme jsPDF
}

/**
 * Partager les résultats
 */
function shareResults() {
    const mensualite = document.getElementById('mensualite').textContent;
    const text = `Ma simulation de crédit MLIK : Mensualité de ${mensualite}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Simulation crédit MLIK',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Erreur de partage:', err));
    } else {
        // Fallback : copier dans le presse-papiers
        navigator.clipboard.writeText(text).then(() => {
            alert('Résultats copiés dans le presse-papiers !');
        }).catch(err => {
            console.error('Erreur de copie:', err);
        });
    }
}

/**
 * Réinitialiser le formulaire
 */
function resetSimulator() {
    document.getElementById('prixBien').value = 300000;
    document.getElementById('prixBienRange').value = 300000;
    document.getElementById('apport').value = 60000;
    document.getElementById('apportRange').value = 60000;
    document.getElementById('duree').value = 20;
    document.getElementById('dureeRange').value = 20;
    document.getElementById('tauxInteret').value = 7.5;
    document.getElementById('tauxInteretRange').value = 7.5;
    
    calculateCredit();
}

/**
 * Sauvegarder la simulation (localStorage)
 */
function saveSimulation() {
    const simulation = {
        prixBien: document.getElementById('prixBien').value,
        apport: document.getElementById('apport').value,
        duree: document.getElementById('duree').value,
        tauxInteret: document.getElementById('tauxInteret').value,
        date: new Date().toISOString()
    };
    
    localStorage.setItem('mlik_simulation', JSON.stringify(simulation));
    alert('Simulation sauvegardée !');
}

/**
 * Charger une simulation sauvegardée
 */
function loadSimulation() {
    const saved = localStorage.getItem('mlik_simulation');
    
    if (saved) {
        const simulation = JSON.parse(saved);
        
        document.getElementById('prixBien').value = simulation.prixBien;
        document.getElementById('prixBienRange').value = simulation.prixBien;
        document.getElementById('apport').value = simulation.apport;
        document.getElementById('apportRange').value = simulation.apport;
        document.getElementById('duree').value = simulation.duree;
        document.getElementById('dureeRange').value = simulation.duree;
        document.getElementById('tauxInteret').value = simulation.tauxInteret;
        document.getElementById('tauxInteretRange').value = simulation.tauxInteret;
        
        calculateCredit();
        alert('Simulation chargée !');
    } else {
        alert('Aucune simulation sauvegardée trouvée.');
    }
}

/**
 * Comparer plusieurs simulations (fonction avancée)
 */
function compareSimulations() {
    // À implémenter : permettre de comparer différentes durées ou taux
    console.log('Comparaison de simulations à implémenter');
}

/**
 * Calculer la capacité d'emprunt basée sur le revenu
 */
function calculateBorrowingCapacity(revenuMensuel, tauxEndettement = 33) {
    // Capacité de mensualité = revenu * (taux d'endettement / 100)
    const capaciteMensualite = revenuMensuel * (tauxEndettement / 100);
    
    // Calculer le montant empruntable
    const dureeAnnees = 20; // Durée par défaut
    const tauxAnnuel = 7.5; // Taux par défaut
    const tauxMensuel = tauxAnnuel / 100 / 12;
    const dureeMois = dureeAnnees * 12;
    
    // Formule inversée : C = M * ((1 - (1 + t)^(-n)) / t)
    const montantEmpruntable = capaciteMensualite * ((1 - Math.pow(1 + tauxMensuel, -dureeMois)) / tauxMensuel);
    
    return {
        capaciteMensualite: capaciteMensualite,
        montantEmpruntable: montantEmpruntable
    };
}

// Rendre les fonctions accessibles globalement
window.calculateCredit = calculateCredit;
window.resetSimulator = resetSimulator;
window.saveSimulation = saveSimulation;
window.loadSimulation = loadSimulation;
window.shareResults = shareResults;
window.exportToPDF = exportToPDF;