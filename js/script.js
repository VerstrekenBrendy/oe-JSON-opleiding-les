"use strict";

/*
Next step: ToonDetails
*/

const RdbSemesterNaam = 'rdbSemester';
const ChkLectorenNaam = 'chkLectoren';

var opleiding;
var huidigOnderdeel;

var btnAdd, btnDelete, btnSave;
var divButtons, divContainer, divEdit, divModus, divNav, divShow;

window.addEventListener('load', Initieer);

function Initieer() {
	KoppelElementen();
      KoppelEvents();
      LeesJSON();
      GeefStartSituatie();
};

const GeefStartSituatie = () => {
      divShow.classList.add('hidden');
      divEdit.classList.add('hidden');
      divButtons.classList.add('hidden');
      divNav.innerHTML = "";
}

const LeesJSON = () => {
      let pad = 'js/opleiding.json';
      (async () => {
            opleiding = await(GetJSON(pad));
            console.log(opleiding);
            ToonOpleiding();
      })()
}

const ToonOpleiding = () => {
      for (const key in opleiding) {
            MaakOnderdeelNav(key);
      }
}

const MaakOnderdeelNav = (onderdeelNaam) => {
      let onderdeelInfo = opleiding[onderdeelNaam];
      let totaalAantalStudiepunten = GeefTotaalAantalStudiePunten(onderdeelInfo);
      let logo = `<img src="img/${onderdeelInfo.Pic}" alt="logo ${onderdeelNaam}" width="100px" class="logo"/>`;
      let figNavBulb = document.createElement('figure');
      figNavBulb.innerHTML =`<h2>${onderdeelNaam}</h2>`;
      figNavBulb.innerHTML += logo;
      figNavBulb.innerHTML += `<span class="spnTotaalStudiepunten">Studiepunten: ${totaalAantalStudiepunten}</span>`;
      figNavBulb.addEventListener('click', () => {
            let modules = onderdeelInfo.Modules;
            huidigOnderdeel = onderdeelNaam;
            ToonDetails(modules);
      })
      divNav.appendChild(figNavBulb);
}

const ToonDetails = (modules) => {
      divShow.innerHTML = "";
      divEdit.innerHTML = "";

      divShow.classList.remove('hidden');
      divEdit.classList.add('hidden');
      divButtons.classList.add('hidden');

      for (let index = 0; index < modules.length; index++) {
            const module = modules[index];
            console.log('Module: ' + module);
            let divModule = document.createElement('div');
            let moduleNaam = module.Module;
            let studiepunten = module.Studiepunten;
            let lectoren = module.Lectoren.join(" - ");
            let semester = module.Semester;
            let samenvatting = `<h4>${moduleNaam}</h4>
                              ${studiepunten} studiepunten<br /><br / >
                              Semester: ${semester}<br /><br / >
                              <b>Lectoren:</b>${lectoren}`;
            divModule.className = 'moduleInfo';
            divModule.id = index;
            divModule.innerHTML = samenvatting;
            divModule.addEventListener('click', () => {

            });
            divShow.appendChild(divModule);
      }
}

const GeefTotaalAantalStudiePunten = (onderdeelInfo) => {
      let modules = onderdeelInfo.Modules;
      let totaal = 0;
      modules.forEach(module => {
            let studiepunten = module.Studiepunten;
            totaal += studiepunten;
      });
      return totaal;
}

const KoppelElementen = () => {
btnAdd = document.getElementById("btnAdd");

btnDelete = document.getElementById("btnDelete");

btnSave = document.getElementById("btnSave");

divButtons = document.getElementById("divButtons");

divContainer = document.getElementById("divContainer");

divEdit = document.getElementById("divEdit");

divModus = document.getElementById("divModus");

divNav = document.getElementById("divNav");

divShow = document.getElementById("divShow");

}

const KoppelEvents = () => {
	btnAdd.addEventListener('click', () => {
                        
	});
	btnDelete.addEventListener('click', () => {
                        
	});
	btnSave.addEventListener('click', () => {
                        
	});
}
