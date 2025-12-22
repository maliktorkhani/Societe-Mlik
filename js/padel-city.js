document.addEventListener('DOMContentLoaded', function () {

    function initPadelCityPlans() {
        // Data structure for blocs per floor
        const floorsData = {
            blockA: [
                { nom: "Bloc A", apart: "A0-1", type: "Appt 01", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A01-1.jpg", img2: "assets/ptojet padelCity/A01-2.jpg" },
                { nom: "Bloc A", apart: "A0-2", type: "Appt 02", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A02-1.jpg", img2: "assets/ptojet padelCity/A02-2.jpg" },
                { nom: "Bloc A", apart: "A0-3", type: "Appt 03", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A03-1.jpg", img2: "assets/ptojet padelCity/A03-2.jpg" },
                { nom: "Bloc A", apart: "A1-1", type: "Appt 11", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A11-1.jpg", img2: "assets/ptojet padelCity/A11-2.jpg" },
                { nom: "Bloc A", apart: "A1-2", type: "Appt 12", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A12-1.jpg", img2: "assets/ptojet padelCity/A12-2.jpg" },
                { nom: "Bloc A", apart: "A1-3", type: "Appt 13", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A13-1.jpg", img2: "assets/ptojet padelCity/A13-2.jpg" },
                { nom: "Bloc A", apart: "A1-4", type: "Appt 14", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A14-1.jpg", img2: "assets/ptojet padelCity/A14-2.jpg" },
                { nom: "Bloc A", apart: "A1-5", type: "Appt 15", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A15-1.jpg", img2: "assets/ptojet padelCity/A15-2.jpg" },
                { nom: "Bloc A", apart: "A1-6", type: "Appt 16", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A16-1.jpg", img2: "assets/ptojet padelCity/A16-2.jpg" },
                { nom: "Bloc A", apart: "A1-7", type: "Appt 17", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A17-1.jpg", img2: "assets/ptojet padelCity/A17-2.jpg" },
                { nom: "Bloc A", apart: "A2-1", type: "Appt 21", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A21-1.jpg", img2: "assets/ptojet padelCity/A21-2.jpg" },
                { nom: "Bloc A", apart: "A2-2", type: "Appt 22", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A22-1.jpg", img2: "assets/ptojet padelCity/A22-2.jpg" },
                { nom: "Bloc A", apart: "A2-3", type: "Appt 23", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A23-1.jpg", img2: "assets/ptojet padelCity/A23-2.jpg" },
                { nom: "Bloc A", apart: "A2-4", type: "Appt 24", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A24-1.jpg", img2: "assets/ptojet padelCity/A24-2.jpg" },
                { nom: "Bloc A", apart: "A2-5", type: "Appt 25", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A25-1.jpg", img2: "assets/ptojet padelCity/A25-2.jpg" },
                { nom: "Bloc A", apart: "A2-6", type: "Appt 26", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A26-1.jpg", img2: "assets/ptojet padelCity/A26-2.jpg" },
                { nom: "Bloc A", apart: "A2-7", type: "Appt 27", etage: "Bloc A", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/A27-1.jpg", img2: "assets/ptojet padelCity/A27-2.jpg" }
            ],
            blockLC: [
                { nom: "Bloc LC", apart: "LC-1", type: "Appt LC1", etage: "Bloc LC", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/LC1-1.jpg", img2: "assets/ptojet padelCity/LC1-2.jpg" },
                { nom: "Bloc LC", apart: "LC-2", type: "Appt LC2", etage: "Bloc LC", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/LC2-1.jpg", img2: "assets/ptojet padelCity/LC2-2.jpg" },
                { nom: "Bloc LC", apart: "LC-3", type: "Appt LC3", etage: "Bloc LC", surface: "-", jardin: "-", img1: "assets/ptojet padelCity/LC3-1.jpg", img2: "assets/ptojet padelCity/LC3-2.jpg" }
            ]
        };

        const section = document.getElementById('padel-service-details');
        const tabBtns = section.querySelectorAll('.tab-btn');
        const blocList = document.getElementById('bloc-list');
        const planImage = document.getElementById('plan-image');
        const zoomImage = document.getElementById('zoom-image');
        const blocTitle = document.getElementById('bloc-title');
        const detailEtage = document.getElementById('detail-etage-value');
        const detailType = document.getElementById('detail-type-value');
        const detailSurface = document.getElementById('detail-surface-value');
        const detailJardin = document.getElementById('detail-jardin-value');
        let currentEtage = 'blockA';
        let currentBloc = null;

        // Function to render bloc list
        function renderBlocList(etage) {
            blocList.innerHTML = '';
            const blocs = floorsData[etage] || [];
            blocs.forEach((bloc, index) => {
                const item = document.createElement('div');
                item.className = 'bloc-item' + (index === 0 ? ' active' : '');
                item.innerHTML = `<div class="table-col">${bloc.nom}</div><div class="table-col">${bloc.apart}</div><div class="table-col">${bloc.type}</div>`;
                item.addEventListener('click', function () {
                    // Remove active from all items
                    section.querySelectorAll('.bloc-item').forEach(el => el.classList.remove('active'));
                    // Add active to clicked item
                    this.classList.add('active');
                    // Update current bloc
                    currentBloc = bloc;
                    // Display plan
                    planImage.src = bloc.img1;
                    zoomImage.src = bloc.img2;
                    blocTitle.textContent = bloc.apart + " - " + bloc.nom;
                    // Update details
                    detailEtage.textContent = bloc.etage;
                    detailType.textContent = bloc.type;
                    detailSurface.textContent = bloc.surface;
                    detailJardin.textContent = bloc.jardin;
                });
                blocList.appendChild(item);
            });
            // Auto-select first bloc
            if (blocs.length > 0) {
                currentBloc = blocs[0];
                planImage.src = blocs[0].img1;
                zoomImage.src = blocs[0].img2;
                blocTitle.textContent = blocs[0].apart + " - " + blocs[0].nom;
                // Update details for first bloc
                detailEtage.textContent = blocs[0].etage;
                detailType.textContent = blocs[0].type;
                detailSurface.textContent = blocs[0].surface;
                detailJardin.textContent = blocs[0].jardin;
                blocTitle.textContent = blocs[0].apart + " - " + blocs[0].nom;
            }
        }

        // Tab click handler
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active from all tabs
                tabBtns.forEach(el => el.classList.remove('active'));
                // Add active to clicked tab
                this.classList.add('active');
                // Update current floor
                currentEtage = this.getAttribute('data-etage');
                // Render bloc list
                renderBlocList(currentEtage);
            });
        });

        // Initialize with default
        renderBlocList(currentEtage);

        // Zoom functionality
        if (zoomImage) {
            zoomImage.style.cursor = 'zoom-in';
            zoomImage.addEventListener('click', function () {
                if (this.style.cursor === 'zoom-in') {
                    this.style.transform = 'scale(2)';
                    this.style.cursor = 'zoom-out';
                } else {
                    this.style.transform = 'scale(1)';
                    this.style.cursor = 'zoom-in';
                }
            });
        }
    }

    // Initialize floor plans if the section exists
    if (document.getElementById('padel-service-details')) {
        initPadelCityPlans();
    }
});
