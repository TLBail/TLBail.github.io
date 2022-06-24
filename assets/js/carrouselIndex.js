const librairie = {
    "@ikalasdev/erc20generator": {
        "description": "Package npm qui permet de déployer un contrat erc20 personnalisé.",
        "github": "https://github.com/ikalasdev/ERC20Generator",
        "npmjs": "https://www.npmjs.com/package/@ikalasdev/erc20generator"
    },
    "@ikalasdev/multisender": {
        "description": "Send BNB or BEP20 tokens to multiple addresses in single transaction. Available on the Binance Smart Chain.",
        "npmjs": "https://www.npmjs.com/package/@ikalasdev/multisender"
    },
    "@ikalasdev/nftgenerator": {
        "description": "Generate nft easily",
        "npmjs": "https://www.npmjs.com/package/@ikalasdev/nftgenerator"
    },
    "@ikalasdev/fund-receiver": {
        "description": "Contract to receive and manage receive funds",
        "npmjs": "https://www.npmjs.com/package/@ikalasdev/fund-receiver",
        "github": "https://github.com/ikalasdev/fund-Receiver"
    },
    "@ikalasdev/contractmanager": {
        "description": "Librairie to manage contracts",
        "npmjs": "https://www.npmjs.com/package/@ikalasdev/contractmanager",
        "github": "https://github.com/ikalasdev/ContractManager"
    }
}

const libraireShowCase = document.getElementById("libraireShowCase");

const className = "content-npmjs";

function onlibrairieButtonClicked(element) {
    libraireShowCase.style.animation = null;
    setTimeout(() => {
        libraireShowCase.style.animation = "appearFromRight 1s cubic-bezier(0.02, 0.86, 0.58, 1)";
    });
    const h1ChildOfLibraireShowCase = libraireShowCase.children[0];
    const pChildOfLibraireShowCase = libraireShowCase.children[1];
    const buttonChildOfLibraireShowCase = libraireShowCase.children[2];
    const button2ChildOfLibraireShowCase = libraireShowCase.children[3];
    h1ChildOfLibraireShowCase.innerHTML = element;
    pChildOfLibraireShowCase.innerHTML = librairie[element].description;
    if (librairie[element].github) {
        buttonChildOfLibraireShowCase.style.display = "inline-block";
        buttonChildOfLibraireShowCase.setAttribute("href", librairie[element].github);
    } else {
        buttonChildOfLibraireShowCase.style.display = "none";
    }
    button2ChildOfLibraireShowCase.setAttribute("href", librairie[element].npmjs);


}

