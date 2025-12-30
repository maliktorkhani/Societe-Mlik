document.addEventListener('DOMContentLoaded', function () {

    function initPadelCityPlans() {
        // Data structure for blocs per floor - reorganized with sub-blocs for etage1
        const floorsData = {
            rdc: {
                hasSubTabs: true,
                blocs: {
                    blocA: [
                        { nom: "Bloc A", apart: "A0-1", type: "S+1", etage: "rdc", surface: "56,90", jardin: "🚫", img1: "assets/ptojet padelCity/A01-1.jpg", img2: "assets/ptojet padelCity/A01-2.jpg" },
                        { nom: "Bloc A", apart: "A0-2", type: "S+1", etage: "rdc", surface: "58,81", jardin: "8,11", img1: "assets/ptojet padelCity/A02-1.jpg", img2: "assets/ptojet padelCity/A02-2.jpg" },
                        { nom: "Bloc A", apart: "A0-3", type: "S+1", etage: "rdc", surface: "60,18", jardin: "27,06", img1: "assets/ptojet padelCity/A03-1.jpg", img2: "assets/ptojet padelCity/A03-2.jpg" },
                        { nom: "Bloc LC", apart: "LC-1", type: "Appt LC1", etage: "rdc", surface: "53,09", jardin: "-", img1: "assets/ptojet padelCity/LC1-1.jpg", img2: "assets/ptojet padelCity/LC1-2.jpg" },
                        { nom: "Bloc LC", apart: "LC-2", type: "Appt LC2", etage: "rdc", surface: "34,28", jardin: "-", img1: "assets/ptojet padelCity/LC2-1.jpg", img2: "assets/ptojet padelCity/LC2-2.jpg" },
                        { nom: "Bloc LC", apart: "LC-3", type: "Appt LC3", etage: "rdc", surface: "242,24", jardin: "63,43", img1: "assets/ptojet padelCity/LC3-1.jpg", img2: "assets/ptojet padelCity/LC3-2.jpg" }
                    ],
                    blocB: [
                        { nom: "Bloc B", apart: "B0-1", type: "S+1", etage: "rdc", surface: "53,65", jardin: "🚫", img1: "assets/ptojet padelCity/1.png", img2: "assets/ptojet padelCity/2.png" },
                        { nom: "Bloc B", apart: "B0-2", type: "S+2", etage: "rdc", surface: "94,32", jardin: "35,69", img1: "assets/ptojet padelCity/3.png", img2: "assets/ptojet padelCity/4.png" },
                        { nom: "Bloc B", apart: "B0-3", type: "S+3", etage: "rdc", surface: "129,31", jardin: "92,18", img1: "assets/ptojet padelCity/5.png", img2: "assets/ptojet padelCity/6.png" },
                        { nom: "Bloc B", apart: "B0-4", type: "S+1", etage: "rdc", surface: "60,15", jardin: "21,29", img1: "assets/ptojet padelCity/7.png", img2: "assets/ptojet padelCity/8.png" },
                        { nom: "Bloc B", apart: "B0-5", type: "S+1", etage: "rdc", surface: "58,81", jardin: "2,93", img1: "assets/ptojet padelCity/9.png", img2: "assets/ptojet padelCity/10.png" },
                        { nom: "Bloc B", apart: "B0-6", type: "S+1", etage: "rdc", surface: "56,91", jardin: "🚫", img1: "assets/ptojet padelCity/11.png", img2: "assets/ptojet padelCity/12.png" },
                        { nom: "Bloc B", apart: "B0-7", type: "S+2", etage: "rdc", surface: "97,66", jardin: "🚫", img1: "assets/ptojet padelCity/13.png", img2: "assets/ptojet padelCity/14.png" },

                    ]
                }
            },
            etage1: {
                hasSubTabs: true,
                blocs: {
                    blocA: [
                        { nom: "Bloc A", apart: "A1-1", type: "S+1", etage: "1er étage", surface: "53,65", jardin: "🚫", img1: "assets/ptojet padelCity/A11-1.jpg", img2: "assets/ptojet padelCity/A11-2.jpg" },
                        { nom: "Bloc A", apart: "A1-2", type: "S+2", etage: "1er étage", surface: "95,29", jardin: "🚫", img1: "assets/ptojet padelCity/A12-1.jpg", img2: "assets/ptojet padelCity/A12-2.jpg" },
                        { nom: "Bloc A", apart: "A1-3", type: "S+1", etage: "1er étage", surface: "63,50", jardin: "🚫", img1: "assets/ptojet padelCity/A13-1.jpg", img2: "assets/ptojet padelCity/A13-2.jpg" },
                        { nom: "Bloc A", apart: "A1-4", type: "S+1", etage: "1er étage", surface: "56,70", jardin: "🚫", img1: "assets/ptojet padelCity/A14-1.jpg", img2: "assets/ptojet padelCity/A14-2.jpg" },
                        { nom: "Bloc A", apart: "A1-5", type: "S+1", etage: "1er étage", surface: "60,83", jardin: "🚫", img1: "assets/ptojet padelCity/A15-1.jpg", img2: "assets/ptojet padelCity/A15-2.jpg" },
                        { nom: "Bloc A", apart: "A1-6", type: "S+2", etage: "1er étage", surface: "103,56", jardin: "12,81", img1: "assets/ptojet padelCity/A16-1.jpg", img2: "assets/ptojet padelCity/A16-2.jpg" },
                        { nom: "Bloc A", apart: "A1-7", type: "S+3", etage: "1er étage", surface: "125,94", jardin: "🚫", img1: "assets/ptojet padelCity/A17-1.jpg", img2: "assets/ptojet padelCity/A17-2.jpg" },
                    ],
                    blocB: [
                        { nom: "Bloc B", apart: "B1-1", type: "S+1", etage: "1er étage", surface: "53,65", jardin: "🚫", img1: "assets/ptojet padelCity/15.png", img2: "assets/ptojet padelCity/16.png" },
                        { nom: "Bloc B", apart: "B1-2", type: "S+2", etage: "1er étage", surface: "94,32", jardin: "🚫", img1: "assets/ptojet padelCity/17.png", img2: "assets/ptojet padelCity/18.png" },
                        { nom: "Bloc B", apart: "B1-3", type: "S+1", etage: "1er étage", surface: "60,44", jardin: "5,55", img1: "assets/ptojet padelCity/19.png", img2: "assets/ptojet padelCity/20.png" },
                        { nom: "Bloc B", apart: "B1-4", type: "S+1", etage: "1er étage", surface: "56,70", jardin: "🚫", img1: "assets/ptojet padelCity/21.png", img2: "assets/ptojet padelCity/22.png" },
                        { nom: "Bloc B", apart: "B1-5", type: "S+1", etage: "1er étage", surface: "60,83", jardin: "🚫", img1: "assets/ptojet padelCity/23.png", img2: "assets/ptojet padelCity/24.png" },
                        { nom: "Bloc B", apart: "B1-6", type: "S+2", etage: "1er étage", surface: "103,56", jardin: "12,81", img1: "assets/ptojet padelCity/25.png", img2: "assets/ptojet padelCity/26.png" },
                        { nom: "Bloc B", apart: "B1-7", type: "S+3", etage: "1er étage", surface: "125,94", jardin: "🚫", img1: "assets/ptojet padelCity/27.png", img2: "assets/ptojet padelCity/28.png" },

                    ],
                    blocC: [
                        { nom: "Bloc C", apart: "C1-1", type: "S+2", etage: "1er étage", surface: "105,69", jardin: "🚫", img1: "assets/ptojet padelCity/29.png", img2: "assets/ptojet padelCity/30.png" },
                        { nom: "Bloc C", apart: "C1-2", type: "S+2", etage: "1er étage", surface: "105,07", jardin: "20,83", img1: "assets/ptojet padelCity/31.png", img2: "assets/ptojet padelCity/32.png" },
                        { nom: "Bloc C", apart: "C1-3", type: "S+1", etage: "1er étage", surface: "54,87", jardin: "6,24", img1: "assets/ptojet padelCity/33.png", img2: "assets/ptojet padelCity/34.png" },
                        { nom: "Bloc C", apart: "C1-4", type: "S+1", etage: "1er étage", surface: "59,88", jardin: "24,41", img1: "assets/ptojet padelCity/35.png", img2: "assets/ptojet padelCity/36.png" },
                        { nom: "Bloc C", apart: "C1-5", type: "S+2", etage: "1er étage", surface: "104,54", jardin: "16,23", img1: "assets/ptojet padelCity/37.png", img2: "assets/ptojet padelCity/38.png" },
                        { nom: "Bloc C", apart: "C1-6", type: "S+3", etage: "1er étage", surface: "129,55", jardin: "20,15", img1: "assets/ptojet padelCity/39.png", img2: "assets/ptojet padelCity/40.png" }
                    ],
                    blocD: [
                        { nom: "Bloc D", apart: "D1-1", type: "S+2", etage: "1er étage", surface: "105,69", jardin: "🚫", img1: "assets/ptojet padelCity/41.png", img2: "assets/ptojet padelCity/42.png" },
                        { nom: "Bloc D", apart: "D1-2", type: "S+2", etage: "1er étage", surface: "105,07", jardin: "20,83", img1: "assets/ptojet padelCity/43.png", img2: "assets/ptojet padelCity/44.png" },
                        { nom: "Bloc D", apart: "D1-3", type: "S+1", etage: "1er étage", surface: "54,87", jardin: "6,25", img1: "assets/ptojet padelCity/45.png", img2: "assets/ptojet padelCity/46.png" },
                        { nom: "Bloc D", apart: "D1-4", type: "S+1", etage: "1er étage", surface: "59,88", jardin: "24,41", img1: "assets/ptojet padelCity/47.png", img2: "assets/ptojet padelCity/48.png" },
                        { nom: "Bloc D", apart: "D1-5", type: "S+2", etage: "1er étage", surface: "104,54", jardin: "16,23", img1: "assets/ptojet padelCity/49.png", img2: "assets/ptojet padelCity/50.png" },
                        { nom: "Bloc D", apart: "D1-6", type: "S+3", etage: "1er étage", surface: "129,55", jardin: "40,46", img1: "assets/ptojet padelCity/51.png", img2: "assets/ptojet padelCity/52.png" }
                    ]
                }
            },
            etage2: {
                hasSubTabs: true,
                blocs: {
                    blocA: [
                        { nom: "Bloc A", apart: "A2-1", type: "S+1", etage: "2er étage", surface: "53,65", jardin: "🚫", img1: "assets/ptojet padelCity/A21-1.jpg", img2: "assets/ptojet padelCity/A21-2.jpg" },
                        { nom: "Bloc A", apart: "A2-2", type: "S+2", etage: "2er étage", surface: "95,29", jardin: "🚫", img1: "assets/ptojet padelCity/A22-1.jpg", img2: "assets/ptojet padelCity/A22-2.jpg" },
                        { nom: "Bloc A", apart: "A2-3", type: "S+1", etage: "2er étage", surface: "63,50", jardin: "🚫", img1: "assets/ptojet padelCity/A23-1.jpg", img2: "assets/ptojet padelCity/A23-2.jpg" },
                        { nom: "Bloc A", apart: "A2-4", type: "S+2", etage: "2er étage", surface: "56,70", jardin: "🚫", img1: "assets/ptojet padelCity/A24-1.jpg", img2: "assets/ptojet padelCity/A24-2.jpg" },
                        { nom: "Bloc A", apart: "A2-5", type: "S+1", etage: "2er étage", surface: "60,83", jardin: "🚫", img1: "assets/ptojet padelCity/A25-1.jpg", img2: "assets/ptojet padelCity/A25-2.jpg" },
                        { nom: "Bloc A", apart: "A2-6", type: "S+2", etage: "2er étage", surface: "103,94", jardin: "🚫", img1: "assets/ptojet padelCity/A26-1.jpg", img2: "assets/ptojet padelCity/A26-2.jpg" },
                        { nom: "Bloc A", apart: "A2-7", type: "S+3", etage: "2er étage", surface: "125,84", jardin: "🚫", img1: "assets/ptojet padelCity/A27-1.jpg", img2: "assets/ptojet padelCity/A27-2.jpg" }
                    ],
                    blocB: [
                        { nom: "Bloc B", apart: "B2-1", type: "S+3", etage: "2er étage", surface: "131,27", jardin: "9,09", img1: "assets/ptojet padelCity/53.png", img2: "assets/ptojet padelCity/54.png" },
                        { nom: "Bloc B", apart: "B2-2", type: "S+1", etage: "2er étage", surface: "59,22", jardin: "12,81", img1: "assets/ptojet padelCity/55.png", img2: "assets/ptojet padelCity/56.png" },
                        { nom: "Bloc B", apart: "B2-3", type: "S+1", etage: "2er étage", surface: "55,25", jardin: "🚫", img1: "assets/ptojet padelCity/57.png", img2: "assets/ptojet padelCity/58.png" },
                        { nom: "Bloc B", apart: "B2-4", type: "S+1", etage: "2er étage", surface: "60,83", jardin: "🚫", img1: "assets/ptojet padelCity/59.png", img2: "assets/ptojet padelCity/60.png" },
                        { nom: "Bloc B", apart: "B2-5", type: "S+2", etage: "2er étage", surface: "103,94", jardin: "🚫", img1: "assets/ptojet padelCity/61.png", img2: "assets/ptojet padelCity/62.png" },
                        { nom: "Bloc B", apart: "B2-6", type: "S+3", etage: "2er étage", surface: "125,84", jardin: "🚫", img1: "assets/ptojet padelCity/63.png", img2: "assets/ptojet padelCity/64.png" }
                    ],
                    blocC: [
                        { nom: "Bloc C", apart: "C2-1", type: "S+3", etage: "2er étage", surface: "122,14", jardin: "11,68", img1: "assets/ptojet padelCity/65.png", img2: "assets/ptojet padelCity/66.png" },
                        { nom: "Bloc C", apart: "C2-2", type: "S+1", etage: "2er étage", surface: "60,62", jardin: "13,29", img1: "assets/ptojet padelCity/67.png", img2: "assets/ptojet padelCity/68.png" },
                        { nom: "Bloc C", apart: "C2-3", type: "S+1", etage: "2er étage", surface: "54,87", jardin: "🚫", img1: "assets/ptojet padelCity/69.png", img2: "assets/ptojet padelCity/70.png" },
                        { nom: "Bloc C", apart: "C2-4", type: "S+1", etage: "2er étage", surface: "59,88", jardin: "🚫", img1: "assets/ptojet padelCity/71.png", img2: "assets/ptojet padelCity/72.png" },
                        { nom: "Bloc C", apart: "C2-5", type: "S+2", etage: "2er étage", surface: "104,54", jardin: "🚫", img1: "assets/ptojet padelCity/73.png", img2: "assets/ptojet padelCity/74.png" },
                        { nom: "Bloc C", apart: "C2-6", type: "S+3", etage: "2er étage", surface: "128,86", jardin: "🚫", img1: "assets/ptojet padelCity/75.png", img2: "assets/ptojet padelCity/76.png" }
                    ],
                    blocD: [
                        { nom: "Bloc D", apart: "D2-1", type: "S+3", etage: "2er étage", surface: "122,53", jardin: "11,68", img1: "assets/ptojet padelCity/77.png", img2: "assets/ptojet padelCity/78.png" },
                        { nom: "Bloc D", apart: "D2-2", type: "S+1", etage: "2er étage", surface: "60,62", jardin: "13,29", img1: "assets/ptojet padelCity/79.png", img2: "assets/ptojet padelCity/80.png" },
                        { nom: "Bloc D", apart: "D2-3", type: "S+1", etage: "2er étage", surface: "54,87", jardin: "🚫", img1: "assets/ptojet padelCity/81.png", img2: "assets/ptojet padelCity/82.png" },
                        { nom: "Bloc D", apart: "D2-4", type: "S+1", etage: "2er étage", surface: "59,88", jardin: "🚫", img1: "assets/ptojet padelCity/83.png", img2: "assets/ptojet padelCity/84.png" },
                        { nom: "Bloc D", apart: "D2-5", type: "S+2", etage: "2er étage", surface: "104,54", jardin: "🚫", img1: "assets/ptojet padelCity/85.png", img2: "assets/ptojet padelCity/86.png" },
                        { nom: "Bloc D", apart: "D2-6", type: "S+3", etage: "2er étage", surface: "128,86", jardin: "🚫", img1: "assets/ptojet padelCity/87.png", img2: "assets/ptojet padelCity/88.png" }
                    ]
                }
            },
            villa: {
                blocs: {
                    all: [
                    ]
                }
            }
        };

        const section = document.getElementById('padel-service-details');
        const tabBtns = section.querySelectorAll('.tab-btn');
        const subTabsContainer = document.getElementById('sub-tabs');
        const blocList = document.getElementById('bloc-list');
        const planImage = document.getElementById('plan-image');
        const zoomImage = document.getElementById('zoom-image');
        const blocTitle = document.getElementById('bloc-title');
        const detailEtage = document.getElementById('detail-etage-value');
        const detailType = document.getElementById('detail-type-value');
        const detailSurface = document.getElementById('detail-surface-value');
        const detailJardin = document.getElementById('detail-jardin-value');

        let currentEtage = 'rdc';
        let currentSubBloc = null;
        let currentBloc = null;

        // Function to render sub-tabs for blocs
        function renderSubTabs(etage) {
            const floorData = floorsData[etage];

            if (floorData && floorData.hasSubTabs) {
                subTabsContainer.style.display = 'flex';
                subTabsContainer.innerHTML = '';

                const blocNames = {
                    blocA: 'Bloc A',
                    blocB: 'Bloc B',
                    blocC: 'Bloc C',
                    blocD: 'Bloc D'
                };

                Object.keys(floorData.blocs).forEach((blocKey, index) => {
                    const btn = document.createElement('button');
                    btn.className = 'sub-tab-btn' + (index === 0 ? ' active' : '');
                    btn.textContent = blocNames[blocKey];
                    btn.setAttribute('data-bloc', blocKey);

                    btn.addEventListener('click', function () {
                        // Remove active from all sub-tabs
                        subTabsContainer.querySelectorAll('.sub-tab-btn').forEach(el => el.classList.remove('active'));
                        // Add active to clicked sub-tab
                        this.classList.add('active');
                        // Update current sub-bloc
                        currentSubBloc = this.getAttribute('data-bloc');
                        // Render bloc list for this sub-bloc
                        renderBlocList(currentEtage, currentSubBloc);
                    });

                    subTabsContainer.appendChild(btn);
                });

                // Auto-select first bloc
                currentSubBloc = 'blocA';
            } else {
                subTabsContainer.style.display = 'none';
                currentSubBloc = null;
            }
        }

        // Function to render bloc list
        function renderBlocList(etage, subBloc = null) {
            blocList.innerHTML = '';
            const floorData = floorsData[etage];

            if (!floorData) return;

            let blocs = [];

            if (subBloc && floorData.blocs[subBloc]) {
                blocs = floorData.blocs[subBloc];
            } else if (floorData.blocs.all) {
                blocs = floorData.blocs.all;
            }

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
                // Render sub-tabs if needed
                renderSubTabs(currentEtage);
                // Render bloc list
                renderBlocList(currentEtage, currentSubBloc);
            });
        });

        // Initialize with default - RDC with Bloc A selected
        currentEtage = 'rdc';
        currentSubBloc = 'blocA';
        renderSubTabs('rdc');
        renderBlocList('rdc', 'blocA');

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
